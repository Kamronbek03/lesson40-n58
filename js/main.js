// Uyga vazifa /////////////////////////
// If //////////////
// N1 //
// let a;
// a = +prompt("a=");
// if (a > 0) {
//   console.log(++a);
// } else {
//   console.log(a);
// }

// N2 //
// let a;
// a = +prompt("a=");
// if (a > 0) {
//   console.log(++a);
// } else if (a == 0) {
//   a = 10;
//   console.log(a);
// } else {
//   a = a - 2;
//   console.log(a);
// }

// N3 //
// let a;
// let b;
// let c;
// let d;
// a = +prompt("a=");
// b = +prompt("b=");
// c = +prompt("c=");
// d = 0;
// if (a % 1 == 0) {
//   d += 1;
// }
// if (b % 1 == 0) {
//   d += 1;
// }
// if (c % 1 == 0) {
//   d += 1;
// }
// console.log(d);

// N4 //
// let a;
// let b;
// a = +prompt("a=");
// b = +prompt("b=");
// if (a > b) {
//   console.log(a);
// } else if (a < b) {
//   console.log(b);
// } else {
//   console.log("Ikkalasi teng!");
// }

// N5 //
// let a;
// let b;
// a = +prompt("a=");
// b = +prompt("b=");
// if (a < b) {
//   console.log(1);
// } else if (a > b) {
//   console.log(2);
// } else {
//   console.log("Ikkalasi teng!");
// }

// N6 //
// let a;
// let b;
// a = +prompt("a=");
// b = +prompt("b=");
// if (a < b) {
//   console.log(b);
//   console.log(a);
// } else {
//   console.log(a);
//   console.log(b);
// }

// N7 //
// let A;
// let B;
// let d;
// A = +prompt("A=");
// B = +prompt("B=");
// if (A > B) {
//   d = A;
//   A = B;
//   B = d;
//   console.log("A=" + A);
//   console.log("B=" + B);
// } else {
//   console.log("A=" + A);
//   console.log("B=" + B);
// }

// N8 //
// let A;
// let B;
// let d;
// A = +prompt("A=");
// B = +prompt("B=");
// if (A != B) {
//   d = A + B;
//   A = d;
//   B = d;
//   console.log("A=" + A);
//   console.log("B=" + B);
// } else {
//   A = 0;
//   B = 0;
//   console.log("A=" + A);
//   console.log("B=" + B);
// }

// N9 //
// let A;
// let B;
// A = +prompt("A=");
// B = +prompt("B=");
// if (A > B) {
//   B = A;
//   console.log("A=" + A);
//   console.log("B=" + B);
// } else if (B > A) {
//   A = B;
//   console.log("A=" + A);
//   console.log("B=" + B);
// } else {
//   A = 0;
//   B = 0;
//   console.log("A=" + A);
//   console.log("B=" + B);
// }

// N10 //
// let a;
// let b;
// let c;
// a = +prompt("a=");
// b = +prompt("b=");
// c = +prompt("c=");
// if (a > b) {
//   if (b > c) {
//     console.log(c);
//   } else {
//     console.log(b);
//   }
// } else if (b > a) {
//   if (a > c) {
//     console.log(c);
//   } else {
//     console.log(a);
//   }
// } else {
//   if (b > c) {
//     console.log(c);
//   } else {
//     console.log(b);
//   }
// }

// N11 //
// let a;
// let b;
// let c;
// a = +prompt("a=");
// b = +prompt("b=");
// c = +prompt("c=");
// if (a > b) {
//   if (b > c) {
//     console.log(b);
//   } else if (a > c) {
//     console.log(c);
//   } else {
//     console.log(a);
//   }
// } else if (b > a) {
//   if (a > c) {
//     console.log(a);
//   } else if (b > c) {
//     console.log(c);
//   } else {
//     console.log(b);
//   }
// } else {
//   console.log(a);
// }

// N12 //
// let a;
// let b;
// let c;
// a = +prompt("a=");
// b = +prompt("b=");
// c = +prompt("c=");
// if (a > b) {
//   if (b > c) {
//     console.log(a);
//     console.log(b);
//   } else {
//     console.log(a);
//     console.log(c);
//   }
// } else if (b > a) {
//   if (a > c) {
//     console.log(a);
//     console.log(b);
//   } else {
//     console.log(b);
//     console.log(c);
//   }
// } else {
//   if (b > c) {
//     console.log(a);
//     console.log(b);
//   } else {
//     console.log(b);
//     console.log(c);
//   }
// }

// N13 //
// let A;
// let B;
// let C;
// A = +prompt("A=");
// B = +prompt("B=");
// C = +prompt("C=");
// if (A < B && B < C) {
//   A *= 2;
//   B *= 2;
//   C *= 2;
//   console.log(A);
//   console.log(B);
//   console.log(C);
// } else {
//   A *= -1;
//   B *= -1;
//   C *= -1;
//   console.log(A);
//   console.log(B);
//   console.log(C);
// }

// N14 //
// let A;
// let B;
// let C;
// A = +prompt("A=");
// B = +prompt("B=");
// C = +prompt("C=");
// if ((A < B && B < C) || (A > B && B > C)) {
//   A *= 2;
//   B *= 2;
//   C *= 2;
//   console.log(A);
//   console.log(B);
//   console.log(C);
// } else {
//   A *= -1;
//   B *= -1;
//   C *= -1;
//   console.log(A);
//   console.log(B);
//   console.log(C);
// }

// N15 //
// let a;
// let b;
// let c;
// let d;
// a = +prompt("a=");
// b = +prompt("b=");
// c = +prompt("c=");
// d = +prompt("d=");
// if (a == b) {
//   if (b == c) {
//     console.log(4);
//   } else {
//     console.log(3);
//   }
// } else if (a == c) {
//   console.log(2);
// } else {
//   console.log(1);
// }

// N16 //
// let x;
// let y;
// x = +prompt("x=");
// if (x >= 2) {
//   y = 4;
// } else if (x <= 0) {
//   y = x * -1;
// } else {
//   y = x ** 2;
// }
// console.log(y);

// N17 //
// let a;
// a = +prompt("Ixtiyoriy yil kiriting!");
// if (a % 100 == 0) {
//   if (a % 400 == 0) {
//     console.log(a + "-chi yil kabisa yili hisoblanib ushbu yilda 366 kun bor.");
//   } else {
//     console.log(a + "-chi yilda 365 kun bor.");
//   }
// } else if (a % 4 == 0) {
//   console.log(a + "-chi yil kabisa yili hisoblanib ushbu yilda 366 kun bor.");
// } else {
//   console.log(a + "-chi yilda 365 kun bor.");
// }

// N18 //
// let a;
// a = +prompt("a=");
// if (a >= 1 && a < 10) {
//   if (a % 2 == 0) {
//     console.log("a=" + a + ": 1 xonali juft son");
//   } else {
//     console.log("a=" + a + ": 1 xonali toq son");
//   }
// } else if (a >= 10 && a < 100) {
//   if (a % 2 == 0) {
//     console.log("a=" + a + ": 2 xonali juft son");
//   } else {
//     console.log("a=" + a + ": 2 xonali toq son");
//   }
// } else {
//   if (a % 2 == 0) {
//     console.log("a=" + a + ": 3 xonali juft son");
//   } else {
//     console.log("a=" + a + ": 3 xonali toq son");
//   }
// }

// Case //////////////
// N1 //
let K;
// K = +prompt("K=");
// switch (K) {
//   case 1:
//     console.log("Yomon");
//     break;
//   case 2:
//     console.log("Qoniqarsiz");
//     break;
//   case 3:
//     console.log("Qoniqarli");
//     break;
//   case 4:
//     console.log("Yaxshi");
//     break;
//   case 5:
//     console.log("A'lo");
//     break;
//   default:
//     console.log("Xato");
// }

// N2 //
// let a;
// a = +prompt("a=");
// switch (a) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Yoz");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz");
//     break;
//   default:
//     console.log("Error");
// }

// N3 //
// let a;
// a = +prompt("a=");
// switch (a) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31 kun bor!");
//     break;
//   case 2:
//     console.log("28 kun bor , agar kabisa yili bo'lsa 29 kun bor!");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30 kun bor!");
//     break;
//   default:
//     console.log("Error");
// }

// N4 //
// let a;
// let b;
// let c;
// a = +prompt("Uzunlik birligini kiriting!");
// b = +prompt("Kesma uzunligini kiriting!");
// switch (a) {
//   case 1:
//     c = b * 0.1;
//     console.log(c + " metr");
//     break;
//   case 2:
//     c = b * 1000;
//     console.log(c + " metr");
//     break;
//   case 3:
//     console.log(b + " metr");
//     break;
//   case 4:
//     c = b * 0.001;
//     console.log(c + " metr");
//     break;
//   case 5:
//     c = b * 0.01;
//     console.log(c + " metr");
//     break;
//   default:
//     console.log("Error");
// }

// N5 //
// let a;
// let b;
// let c;
// a = +prompt("Og'irlik birligini kiriting!");
// b = +prompt("Og'irlik qiymatini kiriting!");
// switch (a) {
//   case 1:
//     console.log(b + " kg");
//     break;
//   case 2:
//     c = b * 0.000001;
//     console.log(c + " kg");
//     break;
//   case 3:
//     c = b * 0.001;
//     console.log(c + " kg");
//     break;
//   case 4:
//     c = b * 1000;
//     console.log(c + " kg");
//     break;
//   case 5:
//     c = b * 100;
//     console.log(c + " kg");
//     break;
//   default:
//     console.log("Error");
// }

// N6 //
// let D;
// let M;
// D = +prompt("D=");
// M = +prompt("M=");
// if (D <= 31) {
//   switch (M) {
//     case 1:
//       console.log(D + "-Yanvar");
//       break;
//     case 2:
//       if (D <= 28) {
//         console.log(D + "-Fevral");
//       } else {
//         console.log("Error");
//       }
//       break;
//     case 3:
//       console.log(D + "-Mart");
//       break;
//     case 4:
//       if (D <= 30) {
//         console.log(D + "-Aprel");
//       } else {
//         console.log("Error");
//       }
//       break;
//     case 5:
//       console.log(D + "-May");
//       break;
//     case 6:
//       if (D <= 30) {
//         console.log(D + "-Iyun");
//       } else {
//         console.log("Error");
//       }
//       break;
//     case 7:
//       console.log(D + "-Iyul");
//       break;
//     case 8:
//       console.log(D + "-August");
//       break;
//     case 9:
//       if (D <= 30) {
//         console.log(D + "-Sentabr");
//       } else {
//         console.log("Error");
//       }
//       break;
//     case 10:
//       console.log(D + "-Oktabr");
//       break;
//     case 11:
//       if (D <= 30) {
//         console.log(D + "-Noyabr");
//       } else {
//         console.log("Error");
//       }
//       break;
//     case 12:
//       console.log(D + "-Dekabr");
//       break;
//     default:
//       console.log("Error");
//   }
// } else {
//   console.log("Error");
// }
