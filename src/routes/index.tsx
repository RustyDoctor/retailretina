import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ComponentType } from "react";
import {
  Activity, AlertTriangle, ArrowUpRight, Boxes, BrainCircuit, Camera,
  Check, ChevronRight, CircleGauge, Clock3, CloudOff, Cpu, Database,
  LayoutDashboard, Menu, Moon, Network, PackageCheck, Radio, RefreshCw,
  ScanLine, ShieldCheck, ShoppingBasket, Store, Sun, Users, UserRoundCheck,
  Wifi, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import entranceImg from "@/assets/camera-entrance.jpg";
import checkoutImg from "@/assets/camera-checkout.jpg";
import groceryImg from "@/assets/camera-grocery.jpg";
import electronicsImg from "@/assets/camera-electronics.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Operations Command Center — EdgeRetail AI" },
    { name: "description", content: "Real-time shopper analytics, inventory intelligence, and queue optimization powered by private edge AI." },
    { property: "og:title", content: "Operations Command Center — EdgeRetail AI" },
    { property: "og:description", content: "Real-time retail intelligence powered by private, on-device AI." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: EdgeRetailDashboard,
});

type Tab = "overview" | "inventory" | "queues" | "architecture";
type Icon = ComponentType<{ className?: string }>;

const tabs: { id: Tab; label: string; icon: Icon }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "inventory", label: "Inventory Radar", icon: Boxes },
  { id: "queues", label: "Queue Optimizer", icon: Users },
  { id: "architecture", label: "Edge & Privacy", icon: Cpu },
];

function EdgeRetailDashboard() {
  const [tab, setTab] = useState<Tab>("overview");
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [rush, setRush] = useState(false);
  const [stockout, setStockout] = useState(false);

  useEffect(() => document.documentElement.classList.toggle("dark", dark), [dark]);

  const selectTab = (id: Tab) => { setTab(id); setMenuOpen(false); };
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center gap-4 px-4 lg:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground"><ScanLine className="size-5" /></div>
            <div className="min-w-0"><div className="truncate text-base font-extrabold">EdgeRetail <span className="text-insight">AI</span></div><div className="hidden text-[10px] font-semibold uppercase text-muted-foreground sm:block">Operations Intelligence</div></div>
          </div>
          <div className="ml-auto hidden items-center gap-2 rounded-md border border-optimal/30 bg-optimal-soft px-3 py-1.5 md:flex">
            <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-optimal opacity-70"/><span className="relative inline-flex size-2 rounded-full bg-optimal"/></span>
            <span className="text-xs font-bold text-optimal">Connected Edge Nodes: 12/12 Online</span><span className="text-xs text-muted-foreground">• 0 Cloud Latency</span>
          </div>
          <div className="flex items-center gap-2 border-l border-border pl-3">
            <Sun className="size-4 text-muted-foreground"/><Switch checked={dark} onCheckedChange={setDark} aria-label="Toggle dark mode"/><Moon className="size-4 text-muted-foreground"/>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(v => !v)} aria-label="Open navigation">{menuOpen ? <X/> : <Menu/>}</Button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className={`${menuOpen ? "flex" : "hidden"} fixed inset-x-0 top-16 z-40 h-[calc(100vh-4rem)] flex-col border-r border-border bg-card p-3 lg:sticky lg:top-16 lg:flex lg:h-[calc(100vh-4rem)] lg:w-60`}>
          <div className="mb-3 px-3 py-3"><div className="text-[10px] font-bold uppercase text-muted-foreground">Active location</div><div className="mt-1 flex items-center gap-2 text-sm font-bold"><Store className="size-4 text-insight"/>Flagship Store #001</div><div className="mt-1 text-xs text-muted-foreground">Downtown • 48,200 sq ft</div></div>
          <nav className="space-y-1">
            {tabs.map(({ id, label, icon: Icon }) => <Button key={id} variant={tab === id ? "secondary" : "ghost"} className={`w-full justify-start ${tab === id ? "border-l-2 border-insight bg-insight-soft text-insight" : "text-muted-foreground"}`} onClick={() => selectTab(id)}><Icon/>{label}</Button>)}
          </nav>
          <div className="mt-auto space-y-3">
            <div className="rounded-md border border-border bg-background p-3"><div className="flex items-center justify-between text-xs"><span className="font-semibold">Edge Health</span><span className="text-optimal">Optimal</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full w-full bg-optimal"/></div><div className="mt-2 font-mono text-[10px] text-muted-foreground">Last sync 12:30:04 • 30 FPS</div></div>
            <div className="flex items-center gap-3 border-t border-border px-2 pt-3"><div className="flex size-8 items-center justify-center rounded-full bg-insight-soft text-xs font-bold text-insight">AM</div><div className="min-w-0"><div className="truncate text-xs font-bold">Alex Morgan</div><div className="text-[10px] text-muted-foreground">Store Operations Lead</div></div></div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 p-4 lg:p-6">
          <div className="mx-auto max-w-[1520px]">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div><div className="mb-1 flex items-center gap-2 text-xs font-bold text-optimal"><Radio className="size-3 animate-pulse"/>LIVE OPERATIONS</div><h1 className="text-2xl font-extrabold md:text-3xl">{tabs.find(t => t.id === tab)?.label}</h1><p className="mt-1 text-sm text-muted-foreground">Saturday, September 19 • Peak trading window</p></div>
              <div className="flex flex-wrap gap-2"><Button variant={rush ? "destructive" : "outline"} size="sm" onClick={() => { setRush(v => !v); if (!rush) setTab("queues"); }}><Users/>{rush ? "End Rush Simulation" : "Simulate Rush Hour"}</Button><Button variant={stockout ? "destructive" : "outline"} size="sm" onClick={() => { setStockout(v => !v); if (!stockout) setTab("inventory"); }}><PackageCheck/>{stockout ? "Reset Shelf" : "Simulate Stock-out"}</Button></div>
            </div>
            {tab === "overview" && <Overview rush={rush} stockout={stockout}/>} 
            {tab === "inventory" && <Inventory stockout={stockout} setStockout={setStockout}/>} 
            {tab === "queues" && <Queues rush={rush} setRush={setRush}/>} 
            {tab === "architecture" && <Architecture/>}
          </div>
        </main>
      </div>
    </div>
  );
}

function SectionTitle({ icon: Icon, title, note }: { icon: Icon; title: string; note?: string }) {
  return <div className="mb-4 flex items-center justify-between"><div><h2 className="flex items-center gap-2 text-sm font-extrabold"><Icon className="size-4 text-insight"/>{title}</h2>{note && <p className="mt-1 text-xs text-muted-foreground">{note}</p>}</div><span className="font-mono text-[10px] text-optimal">● LIVE</span></div>;
}

function Overview({ rush, stockout }: { rush: boolean; stockout: boolean }) {
  const kpis = [
    { label: "Store Traffic Today", value: rush ? "3,126" : "2,845", meta: "+12% vs average", icon: ShoppingBasket, color: "text-insight", bg: "bg-insight-soft" },
    { label: "Active Shoppers", value: rush ? "218" : "142", meta: rush ? "+40% entrance inflow" : "62% store capacity", icon: Users, color: rush ? "text-warning" : "text-optimal", bg: rush ? "bg-warning-soft" : "bg-optimal-soft" },
    { label: "Stock-out Risk", value: stockout ? "4 items" : "3 items", meta: "Urgent attention", icon: AlertTriangle, color: "text-critical", bg: "bg-critical-soft" },
    { label: "Avg. Queue Wait", value: rush ? "4m 18s" : "1m 45s", meta: rush ? "Above threshold" : "Optimal", icon: Clock3, color: rush ? "text-critical" : "text-optimal", bg: rush ? "bg-critical-soft" : "bg-optimal-soft" },
    { label: "Data Processed Locally", value: "98.4%", meta: "Privacy-first edge AI", icon: CloudOff, color: "text-insight", bg: "bg-insight-soft" },
  ];
  return <div className="space-y-5">
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">{kpis.map(({ label, value, meta, icon: Icon, color, bg }) => <div key={label} className="rounded-md border border-border bg-card p-4 shadow-sm"><div className="flex items-start justify-between"><span className="text-xs font-semibold text-muted-foreground">{label}</span><span className={`rounded-md p-1.5 ${bg} ${color}`}><Icon className="size-4"/></span></div><div className="mt-4 text-2xl font-extrabold">{value}</div><div className={`mt-1 text-[11px] font-bold ${color}`}>{meta}</div></div>)}</div>
    {rush && <div className="flex flex-col gap-3 rounded-md border border-warning/40 bg-warning-soft p-4 sm:flex-row sm:items-center"><AlertTriangle className="size-5 shrink-0 text-warning"/><div className="flex-1"><div className="text-sm font-bold">Queue spike detected at Checkout Zone</div><div className="text-xs text-muted-foreground">Entrance inflow is 40% above baseline. Counter 4 should be opened now.</div></div><Button size="sm" onClick={() => {}}>Review staffing <ChevronRight/></Button></div>}
    <div className="rounded-md border border-border bg-card p-4 shadow-sm"><SectionTitle icon={Camera} title="Live Computer Vision Grid" note="On-device processing • Personally identifiable data is never stored"/><div className="grid gap-3 lg:grid-cols-2"><CameraFeed image={entranceImg} title="Entrance" tag={rush ? "Inflow: 61/min • +40%" : "Shopper #104 • Dwell 3m 12s"} boxes={3}/><CameraFeed image={checkoutImg} title="Checkout Zone" tag={rush ? "Queue: 14 People • ALERT" : "Queue Counter: 6 People"} boxes={4} critical={rush}/><CameraFeed image={groceryImg} title="Aisle 4 • Grocery" tag={stockout ? "Shelf 2 • EMPTY DETECTED" : "Shelf health: 91%"} boxes={3} critical={stockout}/><CameraFeed image={electronicsImg} title="Aisle 7 • Electronics" tag="Shopper #218 • Dwell 1m 08s" boxes={3}/></div></div>
  </div>;
}

function CameraFeed({ image, title, tag, boxes, critical = false }: { image: string; title: string; tag: string; boxes: number; critical?: boolean }) {
  const positions = ["left-[15%] top-[30%] h-[38%] w-[13%]", "left-[44%] top-[24%] h-[45%] w-[12%]", "right-[12%] top-[35%] h-[34%] w-[11%]", "left-[66%] top-[28%] h-[40%] w-[10%]"];
  return <div className="group relative aspect-video overflow-hidden rounded-md bg-muted"><img src={image} alt={`${title} live camera feed`} className="h-full w-full object-cover saturate-[.75] transition duration-500 group-hover:scale-[1.02]" width={1024} height={576}/><div className="absolute inset-0 bg-foreground/10"/><div className="camera-scan absolute inset-x-0 top-0 h-px bg-optimal/60"/>
    {positions.slice(0, boxes).map((p, i) => <div key={p} className={`absolute ${p} border ${critical && i === 1 ? "border-critical" : "border-optimal"}`}><span className={`absolute -top-4 left-0 font-mono text-[8px] ${critical && i === 1 ? "bg-critical" : "bg-optimal"} px-1 text-primary-foreground`}>{critical && i === 1 ? "RISK" : `ID ${104+i}`}</span></div>)}
    <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-foreground/65 px-2 py-1.5 text-primary-foreground"><span className="flex items-center gap-1.5 text-[10px] font-bold"><span className="size-1.5 rounded-full bg-critical"/>{title}</span><span className="font-mono text-[9px]">CAM-{title.length + 10} • 30 FPS</span></div><div className={`absolute bottom-2 left-2 rounded-sm ${critical ? "bg-critical" : "bg-foreground/80"} px-2 py-1 font-mono text-[9px] text-primary-foreground`}>{tag}</div></div>;
}

const normalProducts = [
  ["Organic Whole Milk 1L", "SKU 41987", 18, "Low stock", "Aisle 4 • Shelf 2"],
  ["Sourdough Country Loaf", "SKU 72014", 74, "In stock", "Bakery • Bay 1"],
  ["Free Range Eggs 12pk", "SKU 38421", 42, "In stock", "Aisle 4 • Shelf 5"],
  ["Sparkling Water 8pk", "SKU 51903", 8, "Critical", "Aisle 6 • Shelf 3"],
  ["Premium Ground Coffee", "SKU 84116", 65, "In stock", "Aisle 8 • Shelf 1"],
  ["Wireless Earbuds Pro", "SKU 92388", 11, "Low stock", "Aisle 7 • Display 4"],
];

function Inventory({ stockout, setStockout }: { stockout: boolean; setStockout: (v: boolean) => void }) {
  const [restocked, setRestocked] = useState(false);
  const milk = stockout && !restocked ? 0 : 18;
  const products = normalProducts.map((p, i) => i === 0 ? [p[0], p[1], milk, milk === 0 ? "Empty shelf" : "Low stock", p[4]] : p);
  return <div className="space-y-5">
    {(stockout && !restocked) && <div className="rounded-md border border-critical/40 bg-critical-soft p-4"><div className="flex items-start gap-3"><AlertTriangle className="mt-0.5 size-5 shrink-0 text-critical"/><div className="flex-1"><div className="text-sm font-extrabold text-critical">Empty Shelf Detected • Immediate Action</div><div className="mt-1 text-xs">Aisle 4 Shelf 2: Organic Milk is 100% depleted. Lost sales risk: ₹3,840/hour.</div><div className="mt-3 flex flex-wrap gap-2"><Button size="sm"><Wifi/>Trigger Restock Alert</Button><Button size="sm" variant="outline" onClick={() => setRestocked(true)}><Check/>Mark Restocked</Button><Button size="sm" variant="ghost"><Camera/>View Snapshot</Button></div></div></div></div>}
    {!stockout && <div className="rounded-md border border-warning/40 bg-warning-soft p-4"><div className="flex items-center gap-3"><BrainCircuit className="size-5 text-warning"/><div><div className="text-sm font-bold">AI Visual Detection: Replenishment forecast</div><div className="text-xs text-muted-foreground">Aisle 4 Shelf 2: Organic Milk — 82% depleted. Predicted stock-out in 22 minutes.</div></div></div></div>}
    <div className="rounded-md border border-border bg-card p-4"><SectionTitle icon={Boxes} title="Real-Time Shelf Inventory" note="6 priority SKUs monitored across 248 shelf positions"/><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{products.map(([name, sku, qty, status, location]) => { const q = Number(qty); const tone = q === 0 ? "critical" : q < 20 ? "warning" : "optimal"; return <div key={String(sku)} className="rounded-md border border-border bg-background p-4"><div className="flex items-start justify-between gap-3"><div><div className="text-sm font-bold">{name}</div><div className="mt-1 font-mono text-[10px] text-muted-foreground">{sku} • {location}</div></div><span className={`rounded-sm bg-${tone}-soft px-2 py-1 text-[10px] font-bold text-${tone}`}>{status}</span></div><div className="mt-5 flex items-end justify-between"><div><div className="text-2xl font-extrabold">{q}%</div><div className="text-[10px] text-muted-foreground">Shelf capacity</div></div><CircleGauge className={`size-8 text-${tone}`}/></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted"><div className={`h-full bg-${tone}`} style={{ width: `${q}%` }}/></div></div>})}</div></div>
    {restocked && <div className="flex items-center gap-3 rounded-md border border-optimal/40 bg-optimal-soft p-4 text-sm font-bold text-optimal"><Check/>Restock confirmed by floor staff. Shelf verification queued.<Button variant="ghost" size="sm" className="ml-auto" onClick={() => { setRestocked(false); setStockout(false); }}>Dismiss</Button></div>}
  </div>;
}

function Queues({ rush, setRush }: { rush: boolean; setRush: (v: boolean) => void }) {
  const [counter4, setCounter4] = useState(false);
  const overloaded = rush && !counter4;
  const counters = [
    [1, true, overloaded ? 9 : 3, overloaded ? "4m 12s" : "1m 22s"], [2, true, overloaded ? 11 : 4, overloaded ? "5m 08s" : "1m 48s"], [3, true, overloaded ? 8 : 2, overloaded ? "3m 44s" : "0m 58s"], [4, counter4, counter4 ? 2 : 0, counter4 ? "0m 52s" : "—"], [5, true, overloaded ? 7 : 3, overloaded ? "3m 18s" : "1m 36s"], [6, false, 0, "—"],
  ];
  return <div className="space-y-5">
    {overloaded && <div className="rounded-md border border-warning/50 bg-warning-soft p-5"><div className="flex flex-col gap-4 sm:flex-row sm:items-center"><div className="flex size-10 items-center justify-center rounded-md bg-warning text-primary-foreground"><AlertTriangle/></div><div className="flex-1"><div className="text-sm font-extrabold">Queue Spike Warning</div><div className="mt-1 text-xs text-muted-foreground">Inflow at Entrance increased by 40%. Open Counter 4 in 3 minutes to prevent waits exceeding 5 minutes.</div></div><Button onClick={() => setCounter4(true)}><UserRoundCheck/>Open Counter 4 Now</Button></div></div>}
    {counter4 && <div className="flex items-center gap-3 rounded-md border border-optimal/40 bg-optimal-soft p-4 text-sm font-bold text-optimal"><Check/>Counter 4 opened. Average wait projected to normalize in 4 minutes.<Button variant="ghost" size="sm" className="ml-auto" onClick={() => { setRush(false); setCounter4(false); }}>Resolve</Button></div>}
    <div className="rounded-md border border-border bg-card p-4"><SectionTitle icon={Users} title="Live Checkout Line Monitor" note="Wait-time inference updates every 2 seconds"/><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{counters.map(([id, open, queue, wait]) => <div key={String(id)} className={`rounded-md border p-4 ${open ? "border-border bg-background" : "border-border bg-muted/40"}`}><div className="flex items-center justify-between"><div className="text-sm font-extrabold">Counter {id}</div><span className={`flex items-center gap-1.5 text-[10px] font-bold ${open ? "text-optimal" : "text-muted-foreground"}`}><span className={`size-1.5 rounded-full ${open ? "bg-optimal" : "bg-muted-foreground"}`}/>{open ? "OPEN" : "CLOSED"}</span></div><div className="mt-5 grid grid-cols-2 divide-x divide-border"><div><div className="text-2xl font-extrabold">{queue}</div><div className="text-[10px] text-muted-foreground">People in queue</div></div><div className="pl-4"><div className={`text-2xl font-extrabold ${Number(queue) > 6 ? "text-critical" : ""}`}>{wait}</div><div className="text-[10px] text-muted-foreground">Est. wait</div></div></div></div>)}</div></div>
    <StaffingMap rush={rush} counter4={counter4}/>
  </div>;
}

function StaffingMap({ rush, counter4 }: { rush: boolean; counter4: boolean }) {
  const zones = [["Checkout", counter4 ? 5 : 4, rush ? 5 : 4], ["Fresh Food", 6, rush ? 4 : 6], ["Grocery Floor", 8, rush ? 7 : 8], ["Customer Care", 3, 3]];
  return <div className="rounded-md border border-border bg-card p-4"><SectionTitle icon={UserRoundCheck} title="Staff Allocation" note="Current deployment compared with AI recommendation"/><div className="space-y-4">{zones.map(([zone, current, rec]) => <div key={String(zone)} className="grid grid-cols-[120px_1fr_auto] items-center gap-3"><div className="text-xs font-bold">{zone}</div><div className="h-7 overflow-hidden rounded-sm bg-muted"><div className={`flex h-full items-center px-2 text-[10px] font-bold text-primary-foreground ${current === rec ? "bg-optimal" : "bg-warning"}`} style={{ width: `${(Number(current)/8)*100}%` }}>{current} staff</div></div><div className={`min-w-20 text-right text-[10px] font-bold ${current === rec ? "text-optimal" : "text-warning"}`}>AI: {rec} {current === rec ? "✓" : "→"}</div></div>)}</div></div>;
}

function Architecture() {
  const [cloud, setCloud] = useState(false);
  return <div className="space-y-5">
    <div className="rounded-md border border-border bg-card p-5"><div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="flex items-center gap-2 text-sm font-extrabold"><ShieldCheck className="size-4 text-insight"/>Privacy-First Data Flow</h2><p className="mt-1 text-xs text-muted-foreground">Toggle to inspect what leaves the store</p></div><div className="flex items-center gap-3 rounded-md bg-muted p-1"><Button size="sm" variant={!cloud ? "default" : "ghost"} onClick={() => setCloud(false)}>Local Processing</Button><Button size="sm" variant={cloud ? "default" : "ghost"} onClick={() => setCloud(true)}>Cloud Sync</Button></div></div>
      {!cloud ? <div className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]"><FlowNode icon={Camera} title="Camera Streams" detail="12 encrypted inputs"/><FlowArrow/><FlowNode icon={Cpu} title="On-Device NPU" detail="Detection + inference" highlight/><FlowArrow/><FlowNode icon={ShieldCheck} title="Local Alerts" detail="No PII saved" good/></div> : <div className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]"><FlowNode icon={Database} title="Anonymous Metrics" detail="Counts + dwell time"/><FlowArrow/><FlowNode icon={CloudOff} title="Privacy Filter" detail="Faces never transmitted" highlight/><FlowArrow/><FlowNode icon={Network} title="Secure Cloud Sync" detail="Aggregates only" good/></div>}
      <div className="mt-6 rounded-md border border-optimal/30 bg-optimal-soft p-4 text-center text-xs font-bold text-optimal"><ShieldCheck className="mr-2 inline size-4"/>Zero biometric data stored • No facial recognition • Automatic 24-hour metric retention</div>
    </div>
    <div className="grid gap-4 md:grid-cols-3"><MetricGauge value={30} max={30} suffix=" FPS" label="Frame Processing Speed" note="Per camera • Real time"/><MetricGauge value={100} max={100} suffix="%" label="Privacy Compliance" note="GDPR / DPDP compliant"/><MetricGauge value={94} max={100} suffix="%" label="Bandwidth Saved" note="vs. cloud video processing"/></div>
    <div className="grid gap-4 md:grid-cols-2"><div className="rounded-md border border-border bg-card p-5"><h3 className="text-sm font-extrabold">Edge Node Fleet</h3><div className="mt-4 space-y-3">{["ENT-01 • Entrance", "CHK-02 • Checkout", "GRO-04 • Grocery", "ELE-07 • Electronics"].map((n, i) => <div key={n} className="flex items-center gap-3 text-xs"><span className="size-2 rounded-full bg-optimal"/><span className="flex-1 font-medium">{n}</span><span className="font-mono text-muted-foreground">{28+i%3} FPS • {42+i*3}°C</span></div>)}</div></div><div className="rounded-md border border-border bg-card p-5"><h3 className="text-sm font-extrabold">Compliance Controls</h3><div className="mt-4 space-y-3">{["PII redaction at capture", "Encrypted local inference", "Anonymized metric export", "Role-based operator access"].map(n => <div key={n} className="flex items-center gap-3 text-xs"><span className="flex size-5 items-center justify-center rounded-full bg-optimal-soft text-optimal"><Check className="size-3"/></span><span>{n}</span></div>)}</div></div></div>
  </div>;
}

function FlowNode({ icon: Icon, title, detail, highlight, good }: { icon: Icon; title: string; detail: string; highlight?: boolean; good?: boolean }) { return <div className={`flex min-h-36 flex-col items-center justify-center rounded-md border p-4 text-center ${highlight ? "border-insight/40 bg-insight-soft" : good ? "border-optimal/40 bg-optimal-soft" : "border-border bg-background"}`}><Icon className={`mb-3 size-8 ${highlight ? "text-insight" : good ? "text-optimal" : "text-muted-foreground"}`}/><div className="text-sm font-extrabold">{title}</div><div className="mt-1 text-[11px] text-muted-foreground">{detail}</div></div>; }
function FlowArrow() { return <div className="flex items-center justify-center"><ArrowUpRight className="size-5 rotate-45 text-muted-foreground md:rotate-0"/></div>; }
function MetricGauge({ value, max, suffix, label, note }: { value: number; max: number; suffix: string; label: string; note: string }) { const pct = Math.round(value/max*100); return <div className="rounded-md border border-border bg-card p-5"><div className="flex items-center justify-between"><CircleGauge className="size-6 text-insight"/><span className="font-mono text-[10px] text-optimal">OPTIMAL</span></div><div className="mt-5 text-3xl font-extrabold">{value}<span className="text-base text-muted-foreground">{suffix}</span></div><div className="mt-1 text-sm font-bold">{label}</div><div className="text-[10px] text-muted-foreground">{note}</div><div className="mt-4 h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-insight" style={{ width: `${pct}%` }}/></div></div>; }