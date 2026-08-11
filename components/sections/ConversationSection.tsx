import { Check } from 'lucide-react'

const formats = ["Property", "Yaml", "Xml", "Json", "Toml", "Env"];

export default function ConversationSection() {
  return (
    <section className="overflow-x-auto my-10">
      <div className="mb-8">
          <h3 className="text-lg font-medium">
            Configuration Format Conversions
          </h3>
          <p className="mt-2  text-sm text-muted">
            All conversion combinations are available for free.
          </p>
      </div>
      <table className="border-collapse border w-full">
        <thead>
          <tr className="bg-primary/5">
            <th className="border py-3 pl-4 text-left text-sm font-medium">From / To</th>
            {formats.map((format) => (
              <th key={format} className="border px-4 py-3 text-center text-sm font-medium">
                {format}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {formats.map((format) => (
            <tr
              key={format}
              className="transition-colors"
            >
              <td className="border px-4 py-3 text-sm font-medium">{format}</td>
              {formats.map((item) => (
                <td key={item} className="border px-4 py-3 text-center">
                  <Check size={15} className="mx-auto text-green-600" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
