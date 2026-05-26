import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const capitulos = [
  { id: '01_resumen', titulo: '1. Resumen Ejecutivo', archivo: '01_resumen_cifvic.md' },
  { id: '02_marco', titulo: '2. Marco Legal', archivo: '02_marco_cifvic.md' },
  { id: '03_delitos', titulo: '3. Tipificación de Delitos', archivo: '03_delitos_cifvic.md' },
  { id: '04_comparacion', titulo: '4. Análisis y Comparación', archivo: '04_comparacion_cifvic.md' },
  { id: '05_responsabilidades', titulo: '5. Responsabilidades Legales', archivo: '05_responsabilidades_cifvic.md' },
  { id: '06_datos', titulo: '6. Protección de Datos', archivo: '06_datos_cifvic.md' },
  { id: '07_conclusiones', titulo: '7. Conclusiones y Cierre', archivo: '07_conclusiones_cifvic.md' },
  { id: '08_prompts', titulo: '8. Registro de Prompts', archivo: '08_prompts_cifvic.md' },
];

export default function App() {
  const [capituloActivo, setCapituloActivo] = useState(capitulos[0]);
  const [contenido, setContenido] = useState('');
  const [hoveredId, setHoveredId] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  const capitulosFiltrados = capitulos.filter((cap) =>
    cap.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  useEffect(() => {
   fetch(`/docs_cifvic/${capituloActivo.archivo}`)
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar el archivo');
        return res.text();
      })
      .then((text) => setContenido(text))
      .catch((err) => setContenido('# Error\nNo se pudo encontrar el archivo del informe en la ruta pública.'));
  }, [capituloActivo]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', background: 'linear-gradient(180deg, #e2e8f0 0%, #f8fafc 100%)', margin: 0 }}>
      
      
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#020617', color: 'white', padding: '15px 30px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ backgroundColor: '#2563eb', width: '35px', height: '35px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>Δ</div>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600', letterSpacing: '0.5px' }}>INFORME CIFVIC 2026</h1>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#94a3b8' }}>Seguridad, datos y cumplimiento para análisis institucional</p>
          </div>
        </div>
      </header>

     
      <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        
        <aside style={{ width: '320px', background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)', padding: '28px 24px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(148, 163, 184, 0.32)' }}>
          <div style={{ marginBottom: '18px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#334155', letterSpacing: '1px', textTransform: 'uppercase' }}>Panel de navegación</span>
            <h2 style={{ margin: '10px 0 0', fontSize: '1rem', fontWeight: '700', color: '#0f172a' }}>Capítulos del informe</h2>
          </div>
          <div style={{ marginBottom: '18px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 48%', padding: '14px 16px', borderRadius: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b' }}>Secciones</p>
              <p style={{ margin: '6px 0 0', fontSize: '1.03rem', fontWeight: '700', color: '#0f172a' }}>{capitulos.length}</p>
            </div>
            <div style={{ flex: '1 1 48%', padding: '14px 16px', borderRadius: '16px', backgroundColor: '#eef2ff', border: '1px solid #dbeafe' }}>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#4f46e5' }}>Última actualización</p>
              <p style={{ margin: '6px 0 0', fontSize: '1.03rem', fontWeight: '700', color: '#312e81' }}>May 2026</p>
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar capítulo..."
              style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '1px solid #cbd5e1', backgroundColor: '#f8fafc', color: '#0f172a', fontSize: '0.92rem', boxSizing: 'border-box' }}
            />
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1, overflowY: 'auto', paddingRight: '4px' }}>
            {capitulosFiltrados.map((cap) => {
              const isActive = capituloActivo.id === cap.id;
              const isHovered = hoveredId === cap.id;
              return (
                <button
                  key={cap.id}
                  onClick={() => setCapituloActivo(cap)}
                  onMouseEnter={() => setHoveredId(cap.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    textAlign: 'left',
                    padding: '14px 16px',
                    borderRadius: '14px',
                    border: '1px solid',
                    borderColor: isActive ? '#c7d2fe' : 'transparent',
                    backgroundColor: isActive ? '#eef2ff' : isHovered ? '#f8fafc' : '#ffffff',
                    color: isActive ? '#3730a3' : '#475569',
                    borderLeft: isActive ? '4px solid #4f46e5' : '4px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? '700' : '500',
                    boxShadow: isActive ? '0 8px 20px rgba(99,102,241,0.08)' : 'none'
                  }}
                >
                  {cap.titulo}
                </button>
              );
            })}
          </nav>

          <div style={{ fontSize: '0.8rem', color: '#64748b', padding: '18px 5px 0 5px', borderTop: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span><strong>Autor:</strong> Vicente Cifuentes</span>
            <span><strong>Institución:</strong> INACAP 2026</span>
          </div>
        </aside>

        <main style={{ flexGrow: 1, padding: '44px 60px 50px', overflowY: 'auto', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '18px', marginBottom: '26px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Capítulo activo</p>
              <h2 style={{ margin: '10px 0 0', fontSize: '2rem', lineHeight: '1.1', color: '#0f172a' }}>{capituloActivo.titulo}</h2>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ padding: '10px 14px', borderRadius: '999px', backgroundColor: '#eff6ff', color: '#1d4ed8', fontSize: '0.82rem', fontWeight: '700' }}>Versión 1.0</span>
              <span style={{ padding: '10px 14px', borderRadius: '999px', backgroundColor: '#f0fdf4', color: '#166534', fontSize: '0.82rem', fontWeight: '700' }}>Contenido verificado</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '20px', marginBottom: '28px', alignItems: 'start' }}>
            <div style={{ padding: '24px', borderRadius: '20px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem', lineHeight: '1.7' }}>Este informe está diseñado para presentar un análisis completo de incidentes, tipificación de delitos y responsabilidades legales en el contexto CIFVIC. Selecciona un capítulo a la izquierda para navegar con facilidad y obtén un resumen claro del contenido.</p>
            </div>
            <div style={{ display: 'grid', gap: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', padding: '18px 20px', borderRadius: '18px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 8px 20px rgba(15, 23, 42, 0.05)' }}>
                <div>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.78rem' }}>Documentos</p>
                  <p style={{ margin: '6px 0 0', fontSize: '1.15rem', fontWeight: '700', color: '#0f172a' }}>{capitulos.length}</p>
                </div>
                <span style={{ padding: '8px 12px', borderRadius: '999px', backgroundColor: '#eef2ff', color: '#1d4ed8', fontSize: '0.8rem', fontWeight: '700' }}>Estable</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', padding: '18px 20px', borderRadius: '18px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <div>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.78rem' }}>Acceso</p>
                  <p style={{ margin: '6px 0 0', fontSize: '1.15rem', fontWeight: '700', color: '#0f172a' }}>Privado</p>
                </div>
                <span style={{ padding: '8px 12px', borderRadius: '999px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '0.8rem', fontWeight: '700' }}>Crítico</span>
              </div>
            </div>
          </div>
          <article style={{ 
            maxWidth: '980px', 
            margin: '0 auto', 
            backgroundColor: '#ffffff', 
            padding: '44px 56px', 
            borderRadius: '22px', 
            boxShadow: '0 20px 60px rgba(15, 23, 42, 0.1)',
            color: '#0f172a',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '18px', marginBottom: '26px', flexWrap: 'wrap' }}>
              <div>
                <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748b' }}>Visión general del informe</p>
                <h3 style={{ margin: '8px 0 0', fontSize: '1.3rem', color: '#0f172a' }}>Lectura optimizada y presentación cuidada</h3>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{ padding: '10px 14px', borderRadius: '999px', backgroundColor: '#eef2ff', color: '#1d4ed8', fontSize: '0.8rem', fontWeight: '700' }}>Profesional</span>
                <span style={{ padding: '10px 14px', borderRadius: '999px', backgroundColor: '#ecfccb', color: '#365314', fontSize: '0.8rem', fontWeight: '700' }}>Claro</span>
              </div>
            </div>
            <div style={{ fontSize: '1rem', lineHeight: '1.9' }} className="markdown-body">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{contenido}</ReactMarkdown>
            </div>
          </article>
        </main>

      </div>
    </div>
  );
}