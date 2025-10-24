import { useState, useRef, useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { getStroke } from "perfect-freehand"

function getSvgPathFromStroke(stroke) {
  if (!stroke.length) return ""
  const d = stroke.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`)
  return d.join(" ") + "Z"
}

const staticData = [
  {
    id: "slide-1",
    fragments: [
      {
        type: "title-case",
        title: "1.0.1 – Lesson Takeaways",
        subtitle: "Understanding Course Value",
      },
      {
        type: "flexbox",
        gallery: "https://cq5as7pc73.ufs.sh/f/pHNnzIw3VjcgXNIPGdi7gNzt8EQrq5e2SbJv0d4mFTCGkRhP",
        description: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit totam saepe sequi vel obcaecati inventore illum.",
          "Eveniet commodi recusandae officia quae accusantium dolorem ipsa?",
        ],
      },
    ],
  },
  {
    id: "slide-2",
    fragments: [
      {
        type: "title-case",
        title: "2.0 – Why Take This Course?",
        subtitle: "Key Motivations and Benefits",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "This course is designed to help learners develop deeper understanding of sales consultation through practical examples.",
          "You’ll explore core concepts and real-world cases that challenge your strategic thinking.",
        ],
      },
    ],
  },
  {
    id: "slide-3",
    fragments: [
      {
        type: "title-case",
        title: "3.0 – Summary & Reflection",
        subtitle: "Bringing It All Together",
      },
      {
        type: "flexbox",
        gallery: "https://cq5as7pc73.ufs.sh/f/pHNnzIw3VjcgXNIPGdi7gNzt8EQrq5e2SbJv0d4mFTCGkRhP",
        description: [
          "Reflect on what you’ve learned and how it applies to your personal and professional development.",
          "Use this space to summarize key takeaways.",
        ],
      },
    ],
  },
]

export default function CourseUnitPage() {
  const { isDrawing, clearTrigger } = useOutletContext() || {}
  const scrollRef = useRef(null)
  const sectionsRef = useRef({})

  const [linesBySection, setLinesBySection] = useState({})
  const [activeSection, setActiveSection] = useState(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false })

  useEffect(() => setLinesBySection({}), [clearTrigger])

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => (document.body.style.overflow = "")
  }, [])

  function getRelativePoint(e, sectionEl) {
    const bounds = sectionEl.getBoundingClientRect()
    const x = e.clientX - bounds.left
    const y = e.clientY - bounds.top
    return [x, y]
  }

  function handlePointerDown(e, sectionId) {
    if (!isDrawing) return
    setActiveSection(sectionId)
    const sectionEl = sectionsRef.current[sectionId]
    const point = getRelativePoint(e, sectionEl)
    setLinesBySection(prev => ({
      ...prev,
      [sectionId]: [...(prev[sectionId] || []), [point]],
    }))
  }

  function handlePointerMove(e, sectionId) {
    const sectionEl = sectionsRef.current[sectionId]
    if (!sectionEl) return

    const [x, y] = getRelativePoint(e, sectionEl)
    setCursor({ x, y, visible: isDrawing })

    if (!isDrawing || e.buttons !== 1) return

    setLinesBySection(prev => {
      const lines = prev[sectionId] || []
      const lastLine = lines[lines.length - 1]
      const newLines = [...lines.slice(0, -1), [...lastLine, [x, y]]]
      return { ...prev, [sectionId]: newLines }
    })
  }

  function handlePointerUp() {
    setCursor(c => ({ ...c, visible: false }))
    setActiveSection(null)
  }

  const strokeSettings = {
    size: 4,
    thinning: 0.6,
    smoothing: 0.7,
    streamline: 0.5,
    simulatePressure: true,
  }

  // Fragment renderer: dynamically picks component by type
  function renderFragment(fragment, index) {
    switch (fragment.type) {
      case "title-case":
        return (
          <div
            key={index}
            id="title-case"
            className="flex flex-col space-y-1 py-2 border-b"
          >
            <h1 id="title" className="text-2xl font-bold tracking-tight text-primary">
              {fragment.title}
            </h1>
            <h2 id="subtitle" className="text-base text-muted-foreground">
              {fragment.subtitle}
            </h2>
          </div>
        )

      case "paragraphs":
        return (
          <div
            key={index}
            id="paragraphs"
            className="space-y-2 text-sm leading-relaxed"
          >
            {fragment.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )

      case "flexbox":
        return (
          <div
            key={index}
            id="flexbox"
            className="flex flex-col md:flex-row items-start justify-between gap-6 py-4"
          >
            <div id="gallery" className="w-full md:w-1/2">
              <img
                src={fragment.gallery}
                alt=""
                className="object-cover rounded-md shadow"
              />
            </div>
            <div
              id="description"
              className="max-w-md break-words space-y-3 text-sm leading-relaxed"
            >
              {fragment.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        ref={scrollRef}
        className="absolute inset-0 overflow-y-auto p-4 bg-muted space-y-6"
      >
        {staticData.map(section => (
          <div
            key={section.id}
            id={section.id}
            ref={el => (sectionsRef.current[section.id] = el)}
            className="lg:container lg:mx-auto lg:max-w-5xl relative border rounded-lg p-6 bg-background select-none shadow-sm space-y-4"
            onPointerDown={e => handlePointerDown(e, section.id)}
            onPointerMove={e => handlePointerMove(e, section.id)}
            onPointerUp={handlePointerUp}
            onPointerEnter={() => setActiveSection(section.id)}
            onPointerLeave={() => {
              if (activeSection === section.id) setActiveSection(null)
            }}
          >
            {/* Render dynamic fragments */}
            {section.fragments.map((frag, i) => renderFragment(frag, i))}

            {/* Local SVG for this section */}
            <svg
              className={`absolute inset-0 w-full h-full pointer-events-none z-50 ${isDrawing ? "cursor-crosshair" : "cursor-default"
                }`}
            >
              {linesBySection[section.id]?.map((line, i) => {
                const stroke = getStroke(line, strokeSettings)
                const path = getSvgPathFromStroke(stroke)
                return (
                  <path
                    key={i}
                    d={path}
                    fill="black"
                    stroke="none"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                )
              })}
              {cursor.visible && activeSection === section.id && (
                <circle cx={cursor.x} cy={cursor.y} r={3} fill="black" opacity="0.8" />
              )}
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}
