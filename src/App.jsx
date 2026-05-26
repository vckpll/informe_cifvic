
import React, { useState } from 'react';
import { Shield, FileText, Scale, BarChart2, Users, Database, CheckCircle, Terminal } from 'lucide-react';

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState(0);

  const secciones = [
    {
      id: "resumen",
      titulo: "01. Resumen Ejecutivo",
      icono: <FileText className="w-5 h-5" />,
      contenido: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed"><strong className="text-red-400">¿Qué pasó?</strong> El 26 de septiembre de 2022, la Corporación Administrativa del Poder Judicial (CAPJ) sufrió un ataque informático masivo por el ransomware LockBit. El malware infectó y encriptó los archivos de al menos 143 computadores institucionales de las cortes de apelaciones y tribunales, deteniendo audiencias y gestiones judiciales.</p>
          <p className="text-gray-300 leading-relaxed"><strong className="text-red-400">¿Por qué pasó?</strong> Las estaciones de trabajo afectadas compartían una vulnerabilidad crítica: utilizaban el sistema operativo Windows 7, el cual no contaba con actualizaciones de seguridad oficiales desde el año 2020. Un usuario ejecutó un archivo malicioso, permitiendo que el ransomware se propagara rápidamente por la red interna del Poder Judicial.</p>
          <p className="text-gray-300 leading-relaxed"><strong className="text-red-400">Impacto:</strong> El ataque obligó a suspender temporalmente la tramitación de causas electrónicas, la firma digital de jueces y la realización de audiencias virtuales en varias regiones de Chile. Generó una grave crisis de seguridad pública debido a la obsolescencia tecnológica del software del Estado.</p>
        </div>
      )
    },
    {
      id: "marco",
      titulo: "02. Marco Normativo",
      icono: <Shield className="w-5 h-5" />,
      contenido: (
        <div className="space-y-4">
          <p className="text-gray-300 font-semibold">Leyes y regulaciones aplicables analizadas (Mínimo 4 normas):</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong className="text-blue-400">Ley 21.459 (Delitos Informáticos - Chile):</strong> Tipifica el sabotaje y acceso ilícito. En este caso se vulneró la integridad de sistemas públicos esenciales para el Estado.</li>
            <li><strong className="text-blue-400">Ley 19.628 (Protección de la Vida Privada - Chile):</strong> Regula los datos personales de miles de personas involucradas en causas judiciales (civiles, penales, laborales) que quedaron en riesgo de exposición.</li>
            <li><strong className="text-blue-400">Decreto Supremo N° 83 (Seguridad de la Información Estatal):</strong> Establece la obligación de los organismos públicos de mantener estándares técnicos vigentes y gestionar los riesgos informáticos de forma eficiente.</li>
            <li><strong className="text-blue-400">Estándar Internacional ISO/IEC 27001:</strong> Marco de referencia sobre gestión de parches de seguridad y control de ciclo de vida del software (prohibición de sistemas obsoletos sin soporte).</li>
          </ul>
        </div>
      )
    },
    {
      id: "delitos",
      titulo: "03. Tipificación de Delitos",
      icono: <Scale className="w-5 h-5" />,
      contenido: (
        <div className="space-y-3">
          <p className="text-gray-300">Mapeando las acciones de los atacantes según la Ley 21.459:</p>
          <div className="grid grid-cols-1 gap-3 mt-2">
            <div className="p-3 bg-gray-800 rounded-lg border-l-4 border-red-500">
              <h4 className="text-red-400 font-bold">Artículo 1° - Acceso Ilícito</h4>
              <p className="text-sm text-gray-300">Los atacantes burlaron los perímetros informáticos e ingresaron sin derecho a la infraestructura de red de los tribunales chilenos.</p>
            </div>
            <div className="p-3 bg-gray-800 rounded-lg border-l-4 border-red-500">
              <h4 className="text-red-400 font-bold">Artículo 3° - Saboteo Informático (Integridad de Datos)</h4>
              <p className="text-sm text-gray-300">Se materializó al alterar, dañar y encriptar los archivos institucionales del Poder Judicial mediante la clave maliciosa de LockBit.</p>
            </div>
            <div className="p-3 bg-gray-800 rounded-lg border-l-4 border-red-500">
              <h4 className="text-red-400 font-bold">Artículo 4° - Ataque a la Integridad de un Sistema Informático</h4>
              <p className="text-sm text-gray-300">La infection paralizó severamente el funcionamiento del sistema de tramitación judicial electrónica y las redes locales de las cortes afectadas.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "comparacion",
      titulo: "04. Comparación de Industrias",
      icono: <BarChart2 className="w-5 h-5" />,
      contenido: (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300 border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800 text-gray-200">
                <th className="p-3 border border-gray-700">Eje de Análisis</th>
                <th className="p-3 border border-gray-700">Sector Público / Judicial</th>
                <th className="p-3 border border-gray-700">Industria Bancaria (CMF)</th>
                <th className="p-3 border border-gray-700">Sector Salud (MINSAL)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-700 font-bold text-blue-400">Sanciones</td>
                <td className="p-3 border border-gray-700">Sumarios administrativos a funcionarios, destituciones y alta crisis de fe pública.</td>
                <td className="p-3 border border-gray-700">Multas institucionales millonarias de la CMF y pérdida de licencia corporativa.</td>
                <td className="p-3 border border-gray-700">Sumarios sanitarios inmediatos y responsabilidad penal por riesgo de vidas.</td>
              </tr>
              <tr className="bg-gray-800/40">
                <td className="p-3 border border-gray-700 font-bold text-blue-400">Notificación</td>
                <td className="p-3 border border-gray-700">Reportes hacia el CSIRT de Gobierno y comisiones internas de la Corte Suprema.</td>
                <td className="p-3 border border-gray-700">Obligatoriedad inmediata (primeras 2 a 4 horas) de alertar a la CMF.</td>
                <td className="p-3 border border-gray-700">Plazos variables, enfocados en no interrumpir urgencias médicas vitales.</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-700 font-bold text-blue-400">Exigencia</td>
                <td className="p-3 border border-gray-700">Regulado por DS 83. Crítica por presupuestos públicos limitados o lentos.</td>
                <td className="p-3 border border-gray-700">Extrema exigencia y auditorías externas permanentes bajo normas de la CMF.</td>
                <td className="p-3 border border-gray-700">Foco estricto en el resguardo confidencial de la ficha clínica del paciente.</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      id: "responsabilidades",
      titulo: "05. Responsabilidades Legales",
      icono: <Users className="w-5 h-5" />,
      contenido: (
        <div className="space-y-4">
          <div>
            <h4 className="text-blue-400 font-bold">1. Grupo de Ciberdelincuentes (LockBit)</h4>
            <p className="text-gray-300 text-sm pl-4">Responsabilidad Penal Internacional y Nacional bajo la Ley 21.459 por el sabotaje del sistema informático de un poder del Estado.</p>
          </div>
          <div>
            <h4 className="text-blue-400 font-bold">2. Jefatura Técnica y Corporación Administrativa (CAPJ)</h4>
            <p className="text-gray-300 text-sm pl-4">Responsabilidad Administrativa: Se arriesgan sumarios por falta a la debida diligencia al permitir el uso de computadores con Windows 7 sin soporte técnico vigente en la red institucional.</p>
          </div>
          <div>
            <h4 className="text-blue-400 font-bold">3. Funcionario Final (Causa del Phishing)</h4>
            <p className="text-gray-300 text-sm pl-4">Responsabilidad Funcional: Sin dolo penal si fue engañado. Sin embargo, puede enfrentar amonestaciones si infringió reglamentos internos explícitos de navegación del Poder Judicial.</p>
          </div>
        </div>
      )
    },
    {
      id: "datos",
      titulo: "06. Datos Personales",
      icono: <Database className="w-5 h-5" />,
      contenido: (
        <div className="space-y-3">
          <p className="text-gray-300"><strong className="text-green-400">Ley 19.628:</strong> Riesgos en la data de tribunales.</p>
          <div className="p-3 bg-gray-800 rounded-lg">
            <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded font-bold uppercase">Datos Sensibles en Riesgo</span>
            <p className="text-sm text-gray-300 mt-2">Los archivos encriptados podían contener registros de causas de familia, medidas cautelares, datos de menores de edad e investigaciones penales reservadas, los cuales son estrictamente de carácter sensible.</p>
          </div>
          <div className="p-3 bg-gray-800 rounded-lg">
            <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded font-bold uppercase">Principio de Seguridad</span>
            <p className="text-sm text-gray-300 mt-2">Mantener sistemas operativos obsoletos (Windows 7) viola directamente el principio legal de seguridad de los datos que impone la Ley 19.628 a los custodios de información pública.</p>
          </div>
        </div>
      )
    },
    {
      id: "conclusiones",
      titulo: "07. Recomendaciones y Conclusión",
      icono: <CheckCircle className="w-5 h-5" />,
      contenido: (
        <div className="space-y-3">
          <p className="text-gray-300 font-bold text-green-400">Medidas de mitigación inmediatas:</p>
          <ol className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
            <li><strong>Actualización Obligatoria de Sistemas:</strong> Retirar de forma inmediata de la red cualquier sistema operativo sin soporte (migrar 100% a versiones modernas).</li>
            <li><strong>Segregación de Redes (Network Segmenting):</strong> Aislar las redes de computadores administrativos de los servidores centrales de tramitación judicial.</li>
            <li><strong>Monitoreo EDR Avanzado:</strong> Implementar herramientas de detección y respuesta en endpoints para bloquear la ejecución de ransomware antes del cifrado masivo.</li>
          </ol>
        </div>
      )
    },
    {
      id: "prompts",
      titulo: "08. Bitácora de Prompts IA",
      icono: <Terminal className="w-5 h-5" />,
      contenido: (
        <div className="space-y-2 text-sm text-gray-300">
          <p><strong>Prompt Base:</strong> <em>"Genera un análisis legal exhaustivo chileno enfocado en el ataque de Ransomware LockBit al Poder Judicial en 2022 utilizando Windows 7..."</em></p>
          <p><strong>Uso:</strong> Estructuración de componentes React y modelamiento de la tabla comparativa sectorial de responsabilidades.</p>
          <p><strong>Corrección:</strong> Se enfocó el marco normativo hacia el Decreto Supremo 83 regulador del sector público en vez de normativas financieras exclusivas de la banca.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans flex flex-col">
      {/* Encabezado */}
      <header className="bg-gray-900 border-b border-gray-800 p-5 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-black text-blue-500 tracking-tight">INFORME LEGAL DE CIBERSEGURIDAD</h1>
            <p className="text-xs text-gray-400 mt-1">Caso Evaluado: Ransomware Poder Judicial (2022) | Asignatura: Fundamentos de Seguridad</p>
          </div>
          <div className="bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-700 text-right">
            <p className="text-xs text-gray-400">Estudiante Identificador Obligatorio:</p>
            <p className="text-sm font-mono font-bold text-green-400">informe_cifvic</p>
          </div>
        </div>
      </header>

      {/* Cuerpo principal */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Menú Izquierdo de Navegación */}
        <nav className="md:col-span-1 space-y-2">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider px-2 mb-3">Secciones del Informe</p>
          {secciones.map((sec, index) => (
            <button
              key={sec.id}
              onClick={() => setSeccionActiva(index)}
              className={`w-full flex items-center gap-3 p-3 text-left rounded-lg transition-all border ${
                seccionActiva === index
                  ? 'bg-blue-600/20 border-blue-500 text-blue-400 font-bold shadow-md'
                  : 'bg-gray-900/60 border-transparent hover:bg-gray-900 text-gray-400 hover:text-gray-200'
              }`}
            >
              {sec.icono}
              <span className="text-sm truncate">{sec.titulo}</span>
            </button>
          ))}
        </nav>

        {/* Visor de Contenido Derecho */}
        <section className="md:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2 border-b border-gray-800 pb-3">
              {secciones[seccionActiva].icono}
              {secciones[seccionActiva].titulo}
            </h2>
            <div className="pt-2">
              {secciones[seccionActiva].contenido}
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-800/60 text-xs text-gray-500 text-center">
            Pestaña activa renderizada de forma dinámica mediante React - Código de Evaluación Sumativa N°2
          </div>
        </section>
      </main>
    </div>
  );
}