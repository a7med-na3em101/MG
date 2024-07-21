import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  product = [
    {
      id: 1,
      title: 'اكس اكواتيك  - الأفضل في الوطن العربي بمقاسات دقيقة ولمعان خرافي',
      description:
        'اكس اكواتيك - المنتج الأفضل في الوطن العربي. يتميز بمقاسات دقيقة وجودة عالية ولمعان خرافي. احصل الان على هذا المنتج الذى لا مثيل لة',
      images: [
        'WhatsApp Image 2024-07-17 at 1.27.21 AM.jpeg',
        'WhatsApp Image 2024-07-17 at 1.27.21 AM (1).jpeg',
      ],
    },
    {
      id: 2,
      title:
        'اكس ام تو ايطالية - الأفضل في الوطن العربي بمقاسات دقيقة ولمعان خرافي',
      description:
        'اكس ام تو ايطالي - المنتج الأفضل في الوطن العربي. يتميز بمقاسات دقيقة وجودة عالية ولمعان خرافي. احصل الان على هذا المنتج الذى لا مثيل لة',
      images: [
        'WhatsApp Image 2024-07-13 at 12.47.10 AM (2).jpeg',
        'WhatsApp Image 2024-07-13 at 12.47.10 AM (3).jpeg',
      ],
    },
    {
      id: 3,
      title:
        'صليبة شارب الاصلية - الأفضل في الوطن العربي بمقاسات دقيقة ولمعان خرافي',
      description:
        'صليبة شارب الاصلية - المنتج الأفضل في الوطن العربي. يتميز بمقاسات دقيقة وجودة عالية ولمعان خرافي. احصل الان على هذا المنتج الذى لا مثيل لة',
      images: [
        'WhatsApp Image 2024-07-13 at 12.47.14 AM (3).jpeg',
        'WhatsApp Image 2024-07-13 at 12.47.16 AM.jpeg',
      ],
    },

    {
      id: 4,
      title: 'مجمع بلى - الأفضل في الوطن العربي بمقاسات دقيقة ولمعان خرافي',
      description:
        ' مجمع بلى - المنتج الأفضل في الوطن العربي. يتميز بمقاسات دقيقة وجودة عالية ولمعان خرافي. احصل الان على هذا المنتج الذى لا مثيل لة',
      images: [
        'WhatsApp Image 2024-07-13 at 12.47.11 AM (4).jpeg',
        'WhatsApp Image 2024-07-13 at 12.47.11 AM (5).jpeg',
      ],
    },
    {
      id: 5,
      title: 'اكس ارستون - الأفضل في الوطن العربي بمقاسات دقيقة ولمعان خرافي',
      description:
        'اكس ارستون - المنتج الأفضل في الوطن العربي. يتميز بمقاسات دقيقة وجودة عالية ولمعان خرافي. احصل الان على هذا المنتج الذى لا مثيل لة',
      images: [
        'WhatsApp Image 2024-07-13 at 12.47.11 AM (2).jpeg',
        'WhatsApp Image 2024-07-13 at 12.47.11 AM (3).jpeg',
      ],
    },
    {
      id: 6,
      title: 'طارة - الأفضل في الوطن العربي بمقاسات دقيقة ولمعان خرافي',
      description:
        'طارة - المنتج الأفضل في الوطن العربي. يتميز بمقاسات دقيقة وجودة عالية ولمعان خرافي. احصل الان على هذا المنتج الذى لا مثيل لة',
      images: [
        'WhatsApp Image 2024-07-17 at 1.27.20 AM.jpeg',
        'WhatsApp Image 2024-07-17 at 1.27.20 AM (1).jpeg',
      ],
    },
    {
      id: 7,
      title: 'اكس تركى - الأفضل في الوطن العربي بمقاسات دقيقة ولمعان خرافي',
      description:
        'اكس تركى - المنتج الأفضل في الوطن العربي. يتميز بمقاسات دقيقة وجودة عالية ولمعان خرافي. احصل الان على هذا المنتج الذى لا مثيل لة',
      images: [
        'WhatsApp Image 2024-07-17 at 1.27.20 AM (2).jpeg',
        'WhatsApp Image 2024-07-17 at 1.27.20 AM (3).jpeg',
      ],
    },
    {
      id: 8,
      title:
        'صليبة ال جى الاصلية - الأفضل في الوطن العربي بمقاسات دقيقة ولمعان خرافي',
      description:
        'صليبة ال جى الاصلية - المنتج الأفضل في الوطن العربي. يتميز بمقاسات دقيقة وجودة عالية ولمعان خرافي. احصل الان على هذا المنتج الذى لا مثيل لة',
      images: [
        'WhatsApp Image 2024-07-13 at 12.47.14 AM (1).jpeg',
        'WhatsApp Image 2024-07-13 at 12.47.14 AM (2).jpeg',
      ],
    },
    {
      id: 9,
      title:
        'اكس وايت بوينت ايطالي - الأفضل في الوطن العربي بمقاسات دقيقة ولمعان خرافي',
      description:
        'اكس وايت بوينت ايطالي - المنتج الأفضل في الوطن العربي. يتميز بمقاسات دقيقة وجودة عالية ولمعان خرافي. احصل الان على هذا المنتج الذى لا مثيل لة',
      images: [
        'WhatsApp Image 2024-07-13 at 12.47.11 AM (1).jpeg',
        'WhatsApp Image 2024-07-13 at 12.47.11 AM.jpeg',
      ],
    },

    {
      id: 10,
      title:
        'اكس اكواتيك ايطالي - الأفضل في الوطن العربي بمقاسات دقيقة ولمعان خرافي',
      description:
        'اكس اكواتيك ايطالي - المنتج الأفضل في الوطن العربي. يتميز بمقاسات دقيقة وجودة عالية ولمعان خرافي. احصل الان على هذا المنتج الذى لا مثيل لة',
      images: [
        'WhatsApp Image 2024-07-13 at 12.47.10 AM (1).jpeg',
        'WhatsApp Image 2024-07-13 at 12.47.10 AM.jpeg',
      ],
    },
  ];
}
