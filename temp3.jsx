import React, { useState } from "react";

export default function ApplyCaptainSubsidyPage() {
  const captains = [
    {
      id: 1,
      name: "李*华",
      phone: "15****2345",
    },
    {
      id: 2,
      name: "王*军",
      phone: "18****2233",
    },
  ];

  const guarantors = [
    {
      id: 1,
      name: "张*生",
      limit: 1_000_000,
    },
    {
      id: 2,
      name: "周*姐",
      limit: 500_000,
    },
  ];

  const [selectedCaptainIndex, setSelectedCaptainIndex] = useState(0);
  const [selectedGuarantorIndex, setSelectedGuarantorIndex] = useState(0);
  const [amount, setAmount] = useState(10000);
  const [captainOpen, setCaptainOpen] = useState(false);
  const [guarantorOpen, setGuarantorOpen] = useState(false);

  const currentCaptain = captains[selectedCaptainIndex];
  const currentGuarantor = guarantors[selectedGuarantorIndex];

  const minAmount = 10000;
  const cnvBalance = 128000;
  const dosBalance = 2350;
  const feeRate = 0.01;

  const fee = Math.round((amount || 0) * feeRate);
  const freezeCNV = amount > 0 ? amount : 0;
  const freezeDOS = amount > 0 ? fee : 0;

  const cnvOk = freezeCNV <= cnvBalance;
  const dosOk = freezeDOS <= dosBalance;
  const minOk = freezeCNV >= minAmount;
  const guarantorOk = freezeCNV <= currentGuarantor.limit;
  const isValid = amount > 0 && cnvOk && dosOk && minOk && guarantorOk;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    setAmount(raw === "" ? 0 : parseInt(raw, 10));
  };

  const getErrorText = () => {
    if (amount === 0) return "请输入本次申请的 CNV 数量";
    if (!minOk) return `最小申请额度为 ${minAmount.toLocaleString()} CNV`;
    if (!cnvOk) return "CNV 余额不足";
    if (!dosOk) return "DOS 余额不足";
    if (!guarantorOk) return "本次申请额度超过担保人剩余担保额度";
    return "";
  };

  const errorText = getErrorText();

  return (
    <div className="min-h-screen w-full bg-[#F6F7FB] flex items-center justify-center py-6 text-slate-900">
      {/* 模拟 App 容器 */}
      <div className="w-[390px] h-[932px] relative flex items-center justify-center">
        {/* 遮罩层 */}
        <div className="absolute inset-0 bg-black/30" />

        {/* 中心弹窗 */}
        <div className="relative w-[86%] rounded-2xl bg-white shadow-xl px-4 pt-3 pb-4 space-y-3">
          {/* 标题行 */}
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-[15px] font-semibold text-slate-900">
              申请团队长代打赏
            </h1>
            <button className="w-6 h-6 flex items-center justify-center rounded-full bg-slate-100 text-[12px] text-slate-500">
              ×
            </button>
          </div>

          {/* 关系选择条：团队长 + 担保人 + 担保额度 */}
          <div className="space-y-2">
            {/* 团队长选择（下拉） */}
            <div className="space-y-1">
              <label className="block text-[12px] text-slate-600">
                选择团队长
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCaptainOpen(!captainOpen)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between text-[11px]"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-slate-900">
                      {currentCaptain.name} · {currentCaptain.phone}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      已绑定团队长，点击更换
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 ml-2">
                    {captainOpen ? "收起" : "选择"}
                  </span>
                </button>
                {captainOpen && (
                  <div className="absolute z-10 mt-1 w-full max-h-40 overflow-auto rounded-xl border border-slate-200 bg-white shadow-lg text-[11px]">
                    {captains.map((c, index) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => {
                          setSelectedCaptainIndex(index);
                          setCaptainOpen(false);
                        }}
                        className={`w-full px-3 py-2 flex items-center justify-between text-left hover:bg-slate-50 ${
                          index === selectedCaptainIndex ? "bg-slate-50" : ""
                        }`}
                      >
                        <span className="text-slate-900">
                          {c.name} · {c.phone}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 担保人选择（下拉） */}
            <div className="space-y-1">
              <label className="block text-[12px] text-slate-600">
                选择担保人
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setGuarantorOpen(!guarantorOpen)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between text-[11px]"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-slate-900">
                      {currentGuarantor.name}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      已绑定担保人，点击更换
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 ml-2">
                    {guarantorOpen ? "收起" : "选择"}
                  </span>
                </button>
                {guarantorOpen && (
                  <div className="absolute z-10 mt-1 w-full max-h-40 overflow-auto rounded-xl border border-slate-200 bg-white shadow-lg text-[11px]">
                    {guarantors.map((g, index) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => {
                          setSelectedGuarantorIndex(index);
                          setGuarantorOpen(false);
                        }}
                        className={`w-full px-3 py-2 flex items-center justify-between text-left hover:bg-slate-50 ${
                          index === selectedGuarantorIndex ? "bg-slate-50" : ""
                        }`}
                      >
                        <span className="text-slate-900">{g.name}</span>
                        <span className="text-[10px] text-slate-400">
                          剩余额度 {g.limit.toLocaleString()} CNV
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-500">
                <span>当前团队长：{currentCaptain.name}</span>
                <span>
                  担保人剩余担保额度 {currentGuarantor.limit.toLocaleString()}{" "}
                  CNV
                </span>
              </div>
            </div>
          </div>

          {/* 我的余额 */}
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="rounded-xl bg-slate-50 px-3 py-2">
              <div className="text-slate-500">可用 CNV</div>
              <div className="mt-0.5 text-sm font-semibold text-slate-900">
                {cnvBalance.toLocaleString()}
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 px-3 py-2 text-right">
              <div className="text-slate-500">可用 DOS</div>
              <div className="mt-0.5 text-sm font-semibold text-slate-900">
                {dosBalance.toLocaleString()}
              </div>
            </div>
          </div>

          {/* 金额输入 */}
          <div className="space-y-1.5">
            <label className="block text-[12px] text-slate-600">
              申请代打赏额度（CNV）
            </label>
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center rounded-xl bg-slate-50 px-3 py-2 border border-slate-200 focus-within:border-slate-400">
                <input
                  type="text"
                  inputMode="numeric"
                  value={amount === 0 ? "" : amount}
                  onChange={handleChange}
                  placeholder="请输入本次申请的 CNV 数量"
                  className="flex-1 bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400"
                />
                <span className="ml-2 text-[11px] text-slate-500">CNV</span>
              </div>
              <button
                onClick={() => setAmount(cnvBalance)}
                className="px-3 py-2 rounded-xl bg-[#059669] text-white text-[11px] active:bg-[#047857]"
              >
                全部
              </button>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500">
              <span>最小 {minAmount.toLocaleString()} CNV</span>
              <span>手续费 1%（DOS）</span>
            </div>
          </div>

          {/* 汇总信息 */}
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-[11px] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">需支付 DOS 手续费</span>
              <span className="font-semibold text-slate-900">
                {freezeDOS.toLocaleString()} DOS
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">本次将冻结资产</span>
              <span className="text-slate-900">
                {freezeCNV.toLocaleString()} CNV + {freezeDOS.toLocaleString()}{" "}
                DOS
              </span>
            </div>
          </div>

          {/* 简短提示 + 报错 */}
          <div className="space-y-1">
            <p className="text-[10px] text-slate-500">
              确认后将冻结对应 CNV 与
              DOS，用于本次代打赏，业务完成后按规则结算。
            </p>
            {errorText && (
              <p className="text-[10px] text-rose-600 flex items-center gap-1">
                <span className="text-[12px]">!</span>
                <span>{errorText}</span>
              </p>
            )}
          </div>

          {/* 底部按钮 */}
          <div className="flex items-center gap-2 pt-1">
            <button className="flex-1 h-9 rounded-2xl bg-slate-100 text-[13px] text-slate-600">
              取消
            </button>
            <button
              className={`flex-1 h-9 rounded-2xl text-[13px] font-semibold shadow-sm ${
                isValid
                  ? "bg-[#059669] text-white active:bg-[#047857]"
                  : "bg-slate-200 text-slate-400"
              }`}
            >
              确认申请
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
