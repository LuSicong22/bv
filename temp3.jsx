import React from "react";
import {
  ArrowRight,
  Info,
  Sparkles,
  Users,
  ChevronRight,
  Flame,
} from "lucide-react";

// 与规范版保持同一套 Token，只是状态改为「首次使用」
const COLORS = {
  roleNewEmployer50: "#ECFDF5",
  roleNewEmployer100: "#D1FAE5",
  roleNewEmployer200: "#A7F3D0",
  roleNewEmployer500: "#10B981",
  roleNewEmployer600: "#059669",

  roleTeamLeader50: "#FFF1F2",
  roleTeamLeader100: "#FFE4E6",
  roleTeamLeader200: "#FECDD3",
  roleTeamLeader500: "#FB923C",
  roleTeamLeader600: "#EA580C",

  roleGuarantor50: "#EFF6FF",
  roleGuarantor100: "#DBEAFE",
  roleGuarantor200: "#BFDBFE",
  roleGuarantor500: "#3B82F6",
  roleGuarantor600: "#2563EB",

  neutral0: "#FFFFFF",
  neutral50: "#F7F9FB",
  neutral100: "#EEF1F4",
  neutral200: "#DADFE4",
  neutral400: "#A1A8AE",
  neutral600: "#6A737C",
  neutral900: "#1E252D",
};

const fontFamily = '"PingFang SC", -apple-system, system-ui, sans-serif';

const BVIcon: React.FC<{ size?: number }> = ({ size = 22 }) => {
  const dim = size;
  return (
    <div
      style={{
        width: dim,
        height: dim,
        borderRadius: "999px",
        background:
          "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.9), rgba(255,255,255,0))," +
          `linear-gradient(135deg, ${COLORS.roleNewEmployer500}, ${COLORS.roleNewEmployer600})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(15,23,42,0.55)",
      }}
    >
      <span
        style={{
          fontFamily,
          fontSize: dim * 0.45,
          fontWeight: 700,
          color: "#FFFFFF",
          letterSpacing: "0.05em",
        }}
      >
        BV
      </span>
    </div>
  );
};

function clampPercent(value: number): number {
  if (!Number.isFinite(value)) return 0;
  if (value < 0) return 0;
  if (value > 100) return 100;
  return Math.round(value);
}

// 首次以「新东家身份」进入时的首页状态：没有团队长、没有代打赏记录
const NewEmployerHomeFirstTime: React.FC = () => {
  const starLevel = 1; // 成为新东家后通常已经有 1 星
  const heatValue = 0; // 还未发生代打赏行为，热力值为 0
  const quota = 0;
  const quotaTotal = 10000;
  const quotaPercent = clampPercent((quota / quotaTotal) * 100);

  const teamLeaders: { name: string; phone: string }[] = [];
  const recentRecords: any[] = [];

  const hasTeamLeaders = teamLeaders.length > 0;
  const hasRecords = recentRecords.length > 0;

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 0% 0%, rgba(16,185,129,0.12), transparent 55%)," +
          "radial-gradient(circle at 100% 100%, rgba(16,185,129,0.10), transparent 55%)," +
          "linear-gradient(135deg, rgba(16,185,129,0.04) 0, rgba(16,185,129,0.04) 30%, transparent 30%, transparent 100%)," +
          "linear-gradient(to right, rgba(15,118,110,0.05) 1px, transparent 1px)," +
          "linear-gradient(to bottom, rgba(15,118,110,0.05) 1px, transparent 1px)," +
          "#F5FAF7",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div
        className="relative z-10 w-full max-w[420px] px-3 sm:px-5"
        style={{ transform: "translate3d(0,0,0)" }}
      >
        <div
          className="mx-auto max-w-[390px] rounded-[32px] border shadow-[0_18px_45px_rgba(15,23,42,0.18)] overflow-hidden"
          style={{
            borderColor: "rgba(148,163,184,0.45)",
            background: COLORS.neutral0,
          }}
        >
          <main className="w-full px-5 py-5">
            {/* 顶部：新东家欢迎状态 */}
            <header className="mb-5">
              <section
                className="relative overflow-hidden rounded-[24px] px-4 pt-4 pb-5 mb-3 shadow-sm"
                style={{
                  background:
                    "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.12), transparent 55%)," +
                    "radial-gradient(circle at 100% 0%, rgba(16,185,129,0.18), transparent 55%)," +
                    `linear-gradient(135deg, ${COLORS.roleNewEmployer500}, ${COLORS.roleNewEmployer600})`,
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px)," +
                      "linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />

                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 mb-2">
                      <span
                        className="rounded-full px-2.5 py-1 text-[11px] tracking-[0.08em] uppercase"
                        style={{
                          fontFamily,
                          background: "rgba(0,0,0,0.18)",
                          color: "#FDFDFD",
                        }}
                      >
                        BV 共赢计划
                      </span>
                    </div>
                    <h1
                      className="mb-1"
                      style={{
                        fontFamily,
                        fontSize: 22,
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        color: "#FFFFFF",
                      }}
                    >
                      欢迎成为新东家
                    </h1>
                    <p
                      className="text-xs opacity-80 mb-3"
                      style={{ fontFamily, color: "#F9FAFB" }}
                    >
                      完成首笔「申请团队长代打赏」，即可正式开始使用 BV 共赢计划。
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-1.5 text-[11px] text-white/80">
                        <Sparkles size={14} />
                        <span>我的星级</span>
                        <span className="inline-flex items-center rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-medium">
                          {starLevel} 星
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-white/80">
                        <Flame size={14} />
                        <span>热力值</span>
                        <span className="inline-flex items-center rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-medium">
                          {heatValue}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div
                      className="relative flex items-center justify-center rounded-full"
                      style={{
                        width: 64,
                        height: 64,
                        background:
                          "conic-gradient(from 220deg, rgba(255,255,255,0.15), rgba(16,185,129,0.8), rgba(248,250,252,0.15))",
                        boxShadow: "0 12px 30px rgba(15,23,42,0.25)",
                      }}
                    >
                      <div
                        className="flex items-center justify-center rounded-full border backdrop-blur"
                        style={{
                          width: 48,
                          height: 48,
                          borderColor: "rgba(148,163,184,0.45)",
                          borderWidth: 1,
                          background: "rgba(15,23,42,0.55)",
                        }}
                      >
                        <BVIcon size={24} />
                      </div>
                      <div
                        className="absolute -bottom-1 right-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                        style={{
                          background: COLORS.neutral0,
                          color: COLORS.roleNewEmployer600,
                          boxShadow: "0 4px 10px rgba(15,23,42,0.35)",
                        }}
                      >
                        Lv.{starLevel}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </header>

            {/* 我的额度：此时通常为 0，重点说明「如何获得额度」 */}
            <section className="mb-4">
              <div
                className="rounded-3xl px-4 py-4 shadow-sm border flex flex-col gap-3"
                style={{
                  background: COLORS.neutral0,
                  borderColor: COLORS.neutral100,
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="flex items-center gap-1 mb-0.5"
                      style={{
                        fontFamily,
                        fontSize: 16,
                        fontWeight: 600,
                        color: COLORS.neutral900,
                      }}
                    >
                      <span>我的额度</span>
                      <div className="relative group cursor-pointer">
                        <Info size={14} stroke={COLORS.neutral400} />
                        <div
                          className="absolute left-0 top-5 w-52 p-2 rounded-lg text-[11px] leading-relaxed shadow-md border hidden group-hover:block z-10"
                          style={{
                            background: COLORS.neutral0,
                            borderColor: COLORS.neutral100,
                            color: COLORS.neutral600,
                          }}
                        >
                          完成首次「申请团队长代打赏」后，会根据规则为你累计 CNV 额度。
                        </div>
                      </div>
                    </div>
                    <p
                      className="text-[11px] mt-0.5"
                      style={{ color: COLORS.neutral400 }}
                    >
                      当前还没有额度，先完成一次团队长代打赏来激活额度。
                    </p>
                  </div>
                  <div className="text-right">
                    <div
                      style={{
                        fontFamily,
                        fontSize: 18,
                        fontWeight: 600,
                        color: COLORS.neutral900,
                      }}
                    >
                      {quota.toLocaleString()} / {quotaTotal.toLocaleString()}
                    </div>
                    <div
                      className="text-[11px]"
                      style={{ fontFamily, color: COLORS.neutral400 }}
                    >
                      CNV 额度
                    </div>
                  </div>
                </div>

                <div className="mt-1">
                  <div
                    className="h-1.5 rounded-full overflow-hidden relative"
                    style={{ background: COLORS.neutral100 }}
                  >
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(148,163,184,0.25), rgba(148,163,184,0))",
                      }}
                    />
                    <div
                      className="relative h-full rounded-full"
                      style={{
                        width: `${quotaPercent}%`,
                        background: `linear-gradient(90deg, ${COLORS.roleNewEmployer500}, ${COLORS.roleNewEmployer600})`,
                      }}
                    />
                  </div>
                  <div
                    className="mt-1 flex justify-between text-[11px]"
                    style={{ color: COLORS.neutral400 }}
                  >
                    <span>已获得额度</span>
                    <span>{quotaPercent}%</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 我的团队关系：首次进入时尚未绑定团队长，使用空状态引导 */}
            <section className="mb-5">
              <div
                className="rounded-3xl px-4 py-4 shadow-sm border flex flex-col gap-3"
                style={{
                  background: COLORS.neutral0,
                  borderColor: COLORS.neutral100,
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div
                    style={{
                      fontFamily,
                      fontSize: 16,
                      fontWeight: 600,
                      color: COLORS.neutral900,
                    }}
                  >
                    我的团队关系
                  </div>
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px]"
                    style={{
                      background: COLORS.neutral50,
                      color: COLORS.neutral600,
                    }}
                  >
                    <Users size={12} />
                    担保人 → 团队长 → 新东家
                  </span>
                </div>

                {/* 抽象链路图保持，帮助理解结构 */}
                <div className="flex items-center justify-between mt-1 mb-3 text-[11px]">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span
                        className="inline-flex items-center justify-center rounded-full px-2 py-0.5"
                        style={{
                          background: COLORS.roleGuarantor50,
                          color: COLORS.roleGuarantor600,
                          fontWeight: 500,
                        }}
                      >
                        G
                      </span>
                      <span style={{ color: COLORS.neutral600 }}>担保人</span>
                    </div>
                    <span
                      className="h-px w-4"
                      style={{ background: COLORS.neutral200 }}
                    />
                    <div className="flex items-center gap-1">
                      <span
                        className="inline-flex items-center justify-center rounded-full px-2 py-0.5"
                        style={{
                          background: COLORS.roleTeamLeader50,
                          color: COLORS.roleTeamLeader600,
                          fontWeight: 500,
                        }}
                      >
                        TL
                      </span>
                      <span style={{ color: COLORS.neutral600 }}>团队长</span>
                    </div>
                    <span
                      className="h-px w-4"
                      style={{ background: COLORS.neutral200 }}
                    />
                    <div className="flex items-center gap-1">
                      <span
                        className="inline-flex items-center justify-center rounded-full px-2 py-0.5"
                        style={{
                          background: COLORS.roleNewEmployer50,
                          color: COLORS.roleNewEmployer600,
                          fontWeight: 500,
                        }}
                      >
                        NE
                      </span>
                      <span style={{ color: COLORS.neutral600 }}>新东家（你）</span>
                    </div>
                  </div>
                </div>

                {/* 空状态：没有任何团队长 */}
                {!hasTeamLeaders && (
                  <div className="rounded-2xl border border-dashed px-3 py-3 flex flex-col gap-2">
                    <p
                      className="text-xs"
                      style={{ fontFamily, color: COLORS.neutral600 }}
                    >
                      你还没有绑定任何团队长。
                      <br />
                      建议先完成一次「申请团队长代打赏」，系统会为你匹配团队长并建立关系。
                    </p>
                    <button
                      className="inline-flex items-center gap-1 self-start rounded-full px-3 py-1 text-[11px]"
                      style={{
                        background: COLORS.roleNewEmployer50,
                        color: COLORS.roleNewEmployer600,
                      }}
                    >
                      去申请团队长代打赏
                      <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* 主操作区：首次使用时更强调「先做哪一步」 */}
            <section className="space-y-3 mb-5">
              <div className="flex items-center justify-between mb-1">
                <span
                  className="text-xs font-semibold"
                  style={{ fontFamily, color: COLORS.neutral400 }}
                >
                  第一步，从这里开始
                </span>
              </div>

              <button
                className="w-full rounded-2xl px-4 py-3 flex items-center justify-between shadow-sm"
                style={{
                  background: COLORS.roleNewEmployer600,
                  color: COLORS.neutral0,
                  boxShadow: "0 10px 24px rgba(5, 150, 105, 0.5)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                    <Sparkles size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold">申请团队长代打赏</div>
                    <div className="text-xs mt-0.5 opacity-90">
                      支付 CNV + DOS 让团队长帮你完成首笔打赏，并建立团队关系。
                    </div>
                  </div>
                </div>
                <ArrowRight size={18} className="ml-3" />
              </button>

              <button
                className="w-full rounded-2xl px-4 py-3 flex items-center justify-between border shadow-sm bg-white"
                style={{
                  borderColor: COLORS.roleNewEmployer100,
                  color: COLORS.neutral400,
                }}
                disabled
              >
                <div className="flex items-start gap-3">
                  <div
                    className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full"
                    style={{ background: COLORS.neutral50 }}
                  >
                    <ArrowRight size={18} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold">代打赏团队长</div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: COLORS.neutral400 }}
                    >
                      完成首笔团队长代打赏后即可使用此功能。
                    </div>
                  </div>
                </div>
                <ArrowRight size={18} className="ml-3" />
              </button>
            </section>

            {/* 最近记录：首次使用为空状态 */}
            <section className="mb-3">
              <div
                className="rounded-3xl px-4 py-4 shadow-sm border flex flex-col gap-3"
                style={{
                  background: COLORS.neutral0,
                  borderColor: COLORS.neutral100,
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div
                    style={{
                      fontFamily,
                      fontSize: 16,
                      fontWeight: 600,
                      color: COLORS.neutral900,
                    }}
                  >
                    最近记录
                  </div>
                </div>

                {!hasRecords && (
                  <div className="rounded-2xl border border-dashed px-3 py-3 text-xs">
                    <p style={{ fontFamily, color: COLORS.neutral600 }}>
                      还没有任何代打赏记录。
                      <br />
                      完成首笔「申请团队长代打赏」后，这里会展示你的最新记录。
                    </p>
                  </div>
                )}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default NewEmployerHomeFirstTime;
