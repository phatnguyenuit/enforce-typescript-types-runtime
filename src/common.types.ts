export interface Product {
  id: number;
  name: string;
  quantity: number;
  type: 'FURNITURE' | 'BOOK';
}

export type FastType = string | number;

// Can not work for TJS

// export interface Candidate {
//   /**
//    * @minLength 10
//    * @maxLength 24
//    */
//   name: string;

//   /**
//    * @TJS-format email
//    */
//   email: string;

//   /**
//    * @TJS-format hostname
//    */
//   hostname: string;
// }
