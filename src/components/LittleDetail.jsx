export function LittleDetail({ icon = null, detail = "" }) {
  return (
    <h1 className="flex flex-row gap-2 items-center">
      {icon} {detail}
    </h1>
  );
}
