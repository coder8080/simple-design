import { Room } from '../../components/rooms-container/rooms-container.components'

import LivingroomWatercolor from '../../assets/livingroom-watercolor.png'
import LivingroomIra from '../../assets/livingroom-ira.png'
import LivingroomNyrs from '../../assets/livingroom-nyrs.png'

import ChildrensBlue from '../../assets/childrens-blue.png'
import ChildrensPink from '../../assets/childrens-pink.png'
import ChildrensBright from '../../assets/childrens-bright.png'

import CorridorIrina from '../../assets/corridor-irina.png'
import CorridorWatercolor from '../../assets/corridor-watercolor.png'
import CorridorKadir from '../../assets/corridor-kadir.png'

interface Group {
  title: string
  rooms: Room[]
}

interface RoomsData {
  LivingRooms: Group
  Childrens: Group
  Corridors: Group
}

const ROOMS_DATA: RoomsData = {
  LivingRooms: {
    title: 'Гостиные',
    rooms: [
      { title: 'Акварель', imageUrl: LivingroomWatercolor },
      { title: 'Ира', imageUrl: LivingroomIra },
      { title: 'Нурс', imageUrl: LivingroomNyrs },
    ],
  },
  Childrens: {
    title: 'Детские',
    rooms: [
      { title: 'Синяя', imageUrl: ChildrensBlue },
      { title: 'Розовая', imageUrl: ChildrensPink },
      { title: 'Яркая', imageUrl: ChildrensBright },
    ],
  },
  Corridors: {
    title: 'Коридоры-прихожие',
    rooms: [
      { title: 'Ирина', imageUrl: CorridorIrina },
      { title: 'Акварель', imageUrl: CorridorWatercolor },
      { title: 'Кадыр', imageUrl: CorridorKadir },
    ],
  },
}

export default ROOMS_DATA
