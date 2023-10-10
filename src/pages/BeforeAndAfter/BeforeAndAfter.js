import React, { useEffect, useState } from 'react'
import Page from '../../components/Page'
import PageText from '../../components/PageText'
import { getImageList } from '../../firebase/storage'
import { getCollectionItems } from '../../firebase/firestore'
import ShowcaseSection from './ShowcaseSection'
import { useTranslation } from 'react-i18next'

function BeforeAndAfter() {

const {t} = useTranslation('common')

const [imageList, setImageList] = useState([])
const [pairingsBA, setPairingsBA] = useState([])
const [beforeAndAfterList, setBeforeAndAfterList] = useState([])

useEffect(() => {
  getImageList(setImageList, 'before-and-after-images')
  const files = getCollectionItems('before-and-after-images')
  files.then((res) => res.forEach((doc) => setPairingsBA((pairingsBA) => [...pairingsBA, doc.data()])))
}, [])

useEffect(() => {
  let BaA = [];
  
  for (let pairing of pairingsBA) {
    let baPair = {beforeFile: '', afterFile: '', type: pairing.type}
    for (let image of imageList) {
      if (image.src.includes(pairing.imageBeforeId)) {
        baPair.beforeFile = image.src
        for (let image of imageList) {
          if (image.src.includes(pairing.imageAfterId)) {
            baPair.afterFile = image.src
            BaA.push(baPair);
          }
        }
      }
    }
  }
  setBeforeAndAfterList(BaA)
}, [pairingsBA, imageList])

  return (
    <Page>
        <PageText heading={t("BaA.heading")} />
        <ShowcaseSection beforeAndAfterList={beforeAndAfterList} />
    </Page>
  )
}

export default BeforeAndAfter