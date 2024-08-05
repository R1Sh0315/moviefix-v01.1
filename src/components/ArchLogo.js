import { useEffect, useState } from "react";

const ArchLogo = ({ logoName }) => {

    const [nameData, setNameData] = useState()

    useEffect(() => {
        const nameArr = logoName.split('')
        const tiltAngle = 0.9
        const firstCharAngle = -3.55
        const nameDetail = []
        nameArr?.map(
            char => {
                if (nameDetail <= 0) {
                    nameDetail.push({ 'char': char, 'angle': firstCharAngle })
                } else {
                    nameDetail.push({ 'char': char, 'angle': (nameDetail[nameDetail.length - 1].angle + tiltAngle) })
                }
            }
        )
        setNameData(nameDetail)
    }, [logoName])

    const LogoNameEle = nameData ? nameData.map(
        (ele, idx) => <div key={idx} className="mf-al-cb" style={{ rotate: ele?.angle + 'deg' }} >{ele?.char}</div>) : ''

    return <div className="mf-al">
        {LogoNameEle}
    </div>
}
export default ArchLogo;