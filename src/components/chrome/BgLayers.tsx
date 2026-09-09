export function BgLayers({ image }: { image?: string }) {
  return (
    <div className="bg-layers" aria-hidden="true">
      <div className="bg-stripes" />
      <div className="bg-overlay" />
      <div className="bg-halftone" />
      {image && <div className="bg-artwork" style={{ backgroundImage: `url(${image})` }} />}
      <div className="bg-vignette" />
    </div>
  )
}
