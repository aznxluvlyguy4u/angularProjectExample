import { Injectable } from '@angular/core';

import { createClient, Entry } from 'contentful';

// const CONFIG = {
//   space: 'wl1z0pal05vy',
//   accessToken: '0e3ec801b5af550c8a1257e8623b1c77ac9b3d8fcfc1b2b7494e3cb77878f92a',
//
//   contentTypeIds: {
//     product: '2PqfXUJwE8qSYKuM0U6w8M'
//   }
// }

const CONFIG = {
  space: 'ab1wht89h7y6',
  accessToken: '563773974e0ac004f8c429d9a0ace9de96d002a49bbaa6e3011b0e9da3afda93',

  contentTypeIds: {
    product: 'product',
    page: 'page',
    animalHealthArticle: 'animalHealthArticle'
  },

  pageEntryIds: {
    animalHealthEntryId: '1DHVHhWtKI64u4QwG2G6Mw',
  }
}

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.product
    }, query))
    .then(res => res.items);
  }

  getAnimalHealthPage(): Promise<Entry<any>> {
    return this.cdaClient.getEntry(
      CONFIG.pageEntryIds.animalHealthEntryId
    )
      .then(res => res);
  }

  getAnimalHealthArticles(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.animalHealthArticle
    }, query))
      .then(res => res.items);
  }
}
