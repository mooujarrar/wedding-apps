export default function Petals() {
  return <div aria-hidden="true">{Array.from({ length: 22 }, (_, index) => <span key={index} className="sakura-petal" style={{ left: `${(index * 37) % 100}%`, animationDelay: `${(index % 8) * -1.4}s`, animationDuration: `${9 + (index % 7)}s`, ['--drift']: `${(index % 2 ? 1 : -1) * (20 + index * 2)}vw` }} />)}</div>
}
