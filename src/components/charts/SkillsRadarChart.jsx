import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import skills from "../../data/skills.json";

export default function SkillsRadarChart() {
  return (
    <div className="h-[320px] w-full sm:h-[380px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={skills} outerRadius="72%">
          <PolarGrid stroke="rgba(148, 163, 184, 0.26)" />
          <PolarAngleAxis
            dataKey="name"
            tick={{
              fill: "#cbd5e1",
              fontSize: 12,
              fontWeight: 500
            }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{
              fill: "#64748b",
              fontSize: 11
            }}
            stroke="rgba(148, 163, 184, 0.22)"
          />
          <Tooltip
            contentStyle={{
              background: "#080d18",
              border: "1px solid rgba(148, 163, 184, 0.25)",
              borderRadius: "16px",
              color: "#f8fafc"
            }}
            itemStyle={{
              color: "#8ecbff"
            }}
            labelStyle={{
              color: "#f8fafc",
              marginBottom: "6px"
            }}
            formatter={(value) => [`${value}%`, "Nivel"]}
          />
          <Radar
            name="Nivel"
            dataKey="level"
            stroke="#4ea8ff"
            fill="#4ea8ff"
            fillOpacity={0.24}
            strokeWidth={2}
            dot={{
              r: 3,
              fill: "#8ecbff",
              strokeWidth: 0
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}