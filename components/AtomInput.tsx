import { NextPage } from "next"

interface Props{
  placeholder: string;
}

const AtomInput : NextPage<Props> = (props) => {
  const {placeholder} = props
  return (
    <div className="mt-3 h400-normal-16px">
      <input className="xs:w-24 sm:w-36 xs:text-[9px] sm:text-sm text-center rounded-3xl border border-primary-gray outline-none p-2.5" type="text" placeholder={placeholder} />
    </div>
  )
}

export default AtomInput