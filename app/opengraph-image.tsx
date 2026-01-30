import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Carlos Acosta - Portfolio';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f1f5f9',
        fontWeight: 'bold',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <div style={{ fontSize: 72, fontWeight: 'bold' }}>Carlos Acosta</div>
      <div style={{ fontSize: 32, color: '#cbd5e1' }}>
        Full Stack Developer & Tech Enthusiast
      </div>
      <div style={{ fontSize: 20, color: '#94a3b8', marginTop: '20px' }}>
        portfolio-steel-kappa-78.vercel.app
      </div>
    </div>,
    {
      ...size,
    }
  );
}
