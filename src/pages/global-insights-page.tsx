import { globalFilters, heatmapData, trendData } from '@/data/mock-data'
import { DistributionHeatmapCard, FilterPanel, TrendChartCard } from '@/components/shared/cards'
import { SectionHeading } from '@/components/shared/section-heading'
import { Input } from '@/components/ui/input'
import { Select, SelectItem } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const renderSelect = (items: string[]) => (
  <Select defaultValue={items[0]}>
    {items.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
  </Select>
)

export function GlobalInsightsPage() {
  return (
    <div className="page-stack">
      <SectionHeading eyebrow="Global case insights" title="Explore worldwide cohort patterns and similarity distributions" description="Filter by disease and treatment context, examine trend charts, and surface mock outcome distributions across curated regions." />
      <FilterPanel
        title="Cohort filters"
        description="Demonstration filters for cancer type, stage, age, technique, region, and free-text similarity search."
        filters={[
          { label: 'Cancer type', control: renderSelect(globalFilters.cancerTypes) },
          { label: 'Stage', control: renderSelect(globalFilters.stages) },
          { label: 'Age band', control: renderSelect(globalFilters.ages) },
          { label: 'Technique', control: renderSelect(globalFilters.techniques) },
          { label: 'Region', control: renderSelect(globalFilters.regions) },
          { label: 'Similarity search', control: <Input placeholder="Try 'T3N2 VMAT APAC'" /> },
        ]}
      />
      <div className="two-one-grid wide-left">
        <TrendChartCard data={trendData} />
        <Card>
          <CardHeader>
            <CardTitle>Survival / outcome patterns</CardTitle>
            <CardDescription>Mock cohort interpretation to help frame regional observations responsibly.</CardDescription>
          </CardHeader>
          <CardContent className="stack-md muted-text">
            <p>APAC and North America show the strongest illustrative survival balance in this dummy dataset, while Europe trends higher in toxicity-free outcomes.</p>
            <p>These charts are synthetic and designed to demonstrate the UI architecture, not real-world clinical efficacy.</p>
            <div className="soft-panel">
              <p className="compact-title">Similarity search panel</p>
              <p className="muted-text">A production version can connect to indexed cohort retrieval, lineage metadata, and center-level access policies.</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <DistributionHeatmapCard data={heatmapData} />
    </div>
  )
}
