const linePoints1 = [
  { t: 0, x: 144, y: 44 }, { x: 144, y: 45 },
  { x: 144, y: 48 }, { x: 143, y: 51 },
  { x: 142, y: 54 }, { x: 140, y: 57 }, { x: 139, y: 60 }, { x: 138, y: 63 }, { x: 137, y: 66 }, { x: 135, y: 69 }, { x: 134, y: 72 }, { x: 133, y: 75 },
  { x: 132, y: 78 }, { x: 130, y: 81 }, { x: 130, y: 84 }, { x: 129, y: 87 }, { x: 128, y: 90 }, { x: 128, y: 93 }, { x: 127, y: 96 }, { x: 126, y: 99 }, { x: 125, y: 102 }, { x: 125, y: 105 }, { x: 124, y: 108 }, { x: 124, y: 111 }, { x: 124, y: 114 }, { x: 124, y: 117 }, { x: 122, y: 120 }, { x: 121, y: 123 }, { x: 120, y: 126 }, { x: 119, y: 129 }, { x: 119, y: 132 }, { x: 118, y: 135 }, { x: 117, y: 138 }, { x: 116, y: 141 }, { x: 116, y: 144 }, { x: 118, y: 147 }, { x: 121, y: 148 }, { x: 124, y: 149 }, { x: 127, y: 149 }, { x: 130, y: 150 }, { x: 133, y: 151 }, { x: 136, y: 153 }, { x: 139, y: 153 }, { x: 142, y: 153 }, { x: 145, y: 154 }, { x: 148, y: 155 }, { x: 151, y: 155 }, { x: 154, y: 156 }, { x: 157, y: 157 }, { x: 160, y: 159 }, { x: 163, y: 159 }, { x: 166, y: 160 }, { x: 169, y: 161 }, { x: 172, y: 163 }, { x: 174, y: 166 }, { x: 174, y: 169 }, { x: 174, y: 172 }, { x: 173, y: 175 }, { x: 171, y: 178 }, { x: 169, y: 181 }, { x: 168, y: 184 }, { x: 167, y: 187 }, { x: 165, y: 190 }, { x: 165, y: 193 }, { x: 164, y: 196 }, { x: 164, y: 199 }, { x: 163, y: 202 }, { x: 161, y: 205 }, { x: 161, y: 208 }, { x: 159, y: 211 }, { x: 159, y: 214 }, { x: 159, y: 217 }, { x: 158, y: 220 }, { x: 158, y: 223 }, { x: 157, y: 226 }, { x: 157, y: 229 }, { x: 156, y: 232 }, { x: 159, y: 234 }, { x: 163, y: 236 }, { x: 166, y: 238 }, { x: 169, y: 239 }, { x: 172, y: 239 }, { x: 176, y: 239 }, { x: 179, y: 239 }, { x: 182, y: 239 }, { x: 185, y: 239 },
  { x: 188, y: 239 }, { x: 191, y: 239 }, { x: 194, y: 240 }, { x: 197, y: 240 }, { x: 200, y: 241 }, { x: 203, y: 241 }, { x: 207, y: 243 }, { x: 210, y: 243 }, { x: 213, y: 244 }, { x: 216, y: 244 }, { x: 219, y: 244 }, { x: 222, y: 245 }, { x: 225, y: 245 }, { x: 228, y: 246 }, { x: 231, y: 246 }, { x: 234, y: 246 }, { x: 238, y: 247 }, { x: 242, y: 248 }, { x: 246, y: 249 }, { x: 249, y: 249 }, { x: 252, y: 250 }, { x: 256, y: 252 }, { x: 259, y: 252 }, { x: 263, y: 252 }, { x: 266, y: 253 }, { x: 269, y: 253 }, { x: 272, y: 253 }, { x: 275, y: 253 }, { x: 278, y: 253 }, { x: 282, y: 253 }, { x: 285, y: 253 }, { x: 289, y: 254 }, { x: 293, y: 254 }, { x: 296, y: 254 }, { x: 299, y: 254 }, { x: 302, y: 255 }, { x: 305, y: 255 }, { x: 308, y: 255 }, { x: 311, y: 257 }, { x: 314, y: 257 }, { x: 317, y: 255 }, { x: 319, y: 258 }, { x: 322, y: 259 }, { x: 325, y: 261 }, { x: 329, y: 262 }, { x: 332, y: 263 }, { x: 335, y: 263 }, { x: 338, y: 264 }, { x: 341, y: 264 }, { x: 344, y: 264 }, { x: 347, y: 264 }, { x: 351, y: 264 }, { x: 354, y: 265 }, { x: 357, y: 265 }, { x: 360, y: 266 }, { x: 363, y: 266 }, { x: 366, y: 266 }, { x: 369, y: 266 }, { x: 372, y: 266 }, { x: 375, y: 266 }, { x: 378, y: 266 }, { x: 382, y: 267 }, { x: 385, y: 268 }, { x: 388, y: 268 }, { x: 391, y: 269 }, { x: 394, y: 269 }, { x: 397, y: 269 }, { x: 400, y: 270 }, { x: 403, y: 270 }, { x: 406, y: 271 }, { x: 409, y: 272 }, { x: 412, y: 273 }, { x: 415, y: 274 }, { x: 418, y: 275 }, { x: 421, y: 277 }, { x: 423, y: 280 }, { x: 424, y: 283 }, { x: 424, y: 286 }, { x: 424, y: 289 },
  { x: 426, y: 292 }, { x: 428, y: 295 },
  { x: 429, y: 298 }, { x: 429, y: 301 }, { x: 430, y: 304 }, { x: 431, y: 307 }, { x: 432, y: 310 }, { x: 433, y: 313 },
  { x: 433, y: 316 }, { x: 433, y: 319 }, { x: 433, y: 322 }, { x: 434, y: 325 }, { x: 434, y: 328 }, { x: 435, y: 331 }, { x: 435, y: 334 }, { x: 435, y: 337 }, { x: 435, y: 340 }, { x: 436, y: 343 }, { x: 437, y: 346 }, { x: 438, y: 349 }, { x: 441, y: 349 }, { x: 444, y: 351 }, { x: 447, y: 353 }, { x: 450, y: 354 }, { x: 453, y: 354 }, { x: 456, y: 354 }, { x: 459, y: 354 }, { x: 462, y: 354 }, { x: 465, y: 354 }, { x: 468, y: 354 }, { x: 471, y: 354 }, { x: 474, y: 355 }, { x: 477, y: 356 }, { x: 480, y: 357 }, { x: 483, y: 358 }, { x: 486, y: 358 }, { x: 489, y: 359 }, { x: 492, y: 359 }, { x: 495, y: 359 }, { x: 498, y: 359 }, { x: 501, y: 359 }, { x: 504, y: 359 }, { x: 507, y: 359 }, { x: 510, y: 359 }, { x: 513, y: 360 }, { x: 516, y: 360 }, { x: 519, y: 361 }, { x: 522, y: 361 }, { x: 525, y: 362 }, { x: 529, y: 363 }, { x: 532, y: 364 }, { x: 535, y: 364 }, { x: 538, y: 364 }, { x: 541, y: 365 }, { x: 544, y: 366 }, { x: 547, y: 367 }, { x: 550, y: 369 }, { x: 553, y: 369 }, { x: 556, y: 370 }, { x: 559, y: 372 }, { x: 562, y: 374 }, { x: 565, y: 376 }, { x: 568, y: 377 }, { x: 571, y: 378 }, { x: 574, y: 380 }, { x: 577, y: 382 }, { x: 580, y: 384 }, { x: 583, y: 385 }, { x: 586, y: 386 }, { x: 589, y: 387 }, { x: 592, y: 388 }, { x: 596, y: 388 }, { x: 599, y: 388 }, { x: 602, y: 388 }, { x: 605, y: 388 }, { x: 608, y: 388 }, { x: 611, y: 386 }, { x: 614, y: 384 }, { x: 617, y: 384 }, { x: 620, y: 383 }, { x: 623, y: 383 },
  { x: 626, y: 383 }, { x: 629, y: 383 }, { x: 633, y: 384 }, { x: 636, y: 385 }, { x: 639, y: 386 }, { x: 642, y: 387 }, { x: 645, y: 388 },
  { x: 648, y: 389 }, { x: 651, y: 391 }, { x: 654, y: 393 }, { x: 657, y: 394 }, { x: 660, y: 395 }, { x: 663, y: 396 }, { x: 666, y: 397 }, { x: 669, y: 398 }, { x: 672, y: 400 }, { x: 676, y: 402 }, { x: 679, y: 404 }, { x: 682, y: 404 }, { x: 685, y: 404 }, { x: 688, y: 405 }, { x: 691, y: 406 }, { x: 694, y: 406 }, { x: 698, y: 406 }, { x: 701, y: 406 }, { x: 704, y: 408 }, { x: 707, y: 410 }, { x: 710, y: 412 }, { x: 713, y: 413 }, { x: 716, y: 414 }, { x: 719, y: 414 }, { x: 722, y: 415 }, { x: 725, y: 416 },
  { x: 728, y: 417 }, { x: 731, y: 418 }, { x: 734, y: 418 }, { x: 737, y: 419 }, { x: 740, y: 419 }, { x: 743, y: 419 }, { x: 748, y: 419 }, { x: 751, y: 419 }, { x: 754, y: 420 }, { x: 758, y: 420 }, { x: 761, y: 421 }, { x: 764, y: 421 }, { x: 767, y: 421 }, { x: 770, y: 423 }, { x: 774, y: 424 }, { x: 777, y: 424 }, { x: 780, y: 424 }, { x: 783, y: 424 }, { x: 786, y: 425 }, { x: 789, y: 425 }, { x: 792, y: 425 }, { x: 796, y: 425 }, { x: 799, y: 427 }, { x: 802, y: 428 }, { x: 805, y: 428 }, { x: 808, y: 429 }, { x: 811, y: 430 }, { x: 814, y: 431 }, { x: 817, y: 432 }, { x: 820, y: 433 }, { x: 823, y: 434 }, { x: 826, y: 434 }, { x: 829, y: 435 }, { x: 832, y: 436 }, { x: 835, y: 438 }, { x: 838, y: 439 }, { x: 841, y: 439 }, { x: 844, y: 440 }, { x: 847, y: 442 }, { x: 850, y: 443 }, { x: 853, y: 444 }, { x: 856, y: 444 }, { x: 859, y: 446 }, { x: 862, y: 448 }, { x: 865, y: 449 }, { x: 868, y: 449 }, { x: 871, y: 451 }, { x: 874, y: 453 }, { x: 877, y: 454 }, { x: 880, y: 455 }, { x: 883, y: 455 }, { x: 886, y: 456 }, { x: 889, y: 457 }, { x: 892, y: 458 }, { x: 895, y: 459 }, { x: 898, y: 460 }, { x: 901, y: 463 }, { x: 904, y: 464 }, { x: 907, y: 466 }, { x: 910, y: 468 }, { x: 913, y: 469 }, { x: 916, y: 469 }, { x: 919, y: 469 }, { x: 921, y: 473 }, { x: 924, y: 474 }, { x: 927, y: 474 }, { x: 930, y: 474 }, { x: 933, y: 473 }, { x: 936, y: 472 }, { x: 939, y: 471 }, { x: 942, y: 470 }, { x: 945, y: 470 }, { x: 948, y: 470 }, { x: 951, y: 473 }, { x: 954, y: 475 }, { x: 954, y: 478 }, { x: 957, y: 479 }, { x: 959, y: 482 }, { x: 962, y: 484 }, { x: 965, y: 486 }, { x: 968, y: 488 },
  { x: 971, y: 489, t: 434000}
];

const linePoints2 = [
  { t: 0, x: 822, y: 400 },
  { x: 822, y: 400 }, { x: 822, y: 396 },
  { x: 821, y: 392 }, { x: 820, y: 389 },
  { x: 820, y: 385 }, { x: 819, y: 381 },
  { x: 817, y: 378 }, { x: 815, y: 374 },
  { x: 814, y: 370 }, { x: 814, y: 365 },
  { x: 814, y: 362 }, { x: 813, y: 358 }, { x: 812, y: 354 },
  { x: 812, y: 351 }, { x: 811, y: 347 }, { x: 811, y: 344 }, { x: 809, y: 341 },
  { x: 809, y: 338 }, { x: 808, y: 334 }, { x: 808, y: 331 }, { x: 806, y: 327 },
  { x: 805, y: 323 }, { x: 803, y: 318 }, { x: 802, y: 313 }, { x: 800, y: 310 }, { x: 800, y: 307 }, { x: 798, y: 304 }, { x: 797, y: 301 }, { x: 797, y: 295 },
  { x: 795, y: 290 }, { x: 791, y: 287 }, { x: 787, y: 284 }, { x: 785, y: 281 }, { x: 783, y: 278 }, { x: 780, y: 276 }, { x: 777, y: 273 }, { x: 774, y: 271 },
  { x: 771, y: 269 }, { x: 768, y: 268 }, { x: 764, y: 266 }, { x: 761, y: 264 }, { x: 757, y: 261 }, { x: 754, y: 258 }, { x: 750, y: 256 }, { x: 747, y: 253 }, { x: 744, y: 251 },
  { x: 741, y: 249 }, { x: 738, y: 246 }, { x: 735, y: 245 }, { x: 732, y: 245 }, { x: 728, y: 243 }, { x: 724, y: 242 }, { x: 720, y: 240 }, { x: 717, y: 239 }, { x: 714, y: 239 },
  { x: 710, y: 237 }, { x: 706, y: 235 }, { x: 703, y: 234 }, { x: 699, y: 233 }, { x: 696, y: 232 },
  { x: 691, y: 228 }, { x: 688, y: 226 }, { x: 685, y: 225 }, { x: 679, y: 221 },
  { x: 676, y: 220 }, { x: 673, y: 219 }, { x: 669, y: 218 }, { x: 665, y: 216 }, { x: 662, y: 213 }, { x: 659, y: 212 }, { x: 656, y: 212 }, { x: 653, y: 210 }, { x: 650, y: 209 },
  { x: 647, y: 208 }, { x: 643, y: 205 }, { x: 639, y: 204 }, { x: 636, y: 203 }, { x: 633, y: 203 }, { x: 630, y: 203 }, { x: 626, y: 203 }, { x: 623, y: 202 }, { x: 620, y: 201 },
  { x: 617, y: 199 }, { x: 611, y: 193 }, { x: 607, y: 191 }, { x: 602, y: 188 }, { x: 600, y: 185 }, { x: 596, y: 182 }, { x: 593, y: 180 }, { x: 589, y: 177 }, { x: 586, y: 175 },
  { x: 581, y: 173 }, { x: 578, y: 172 }, { x: 575, y: 170 }, { x: 572, y: 169 }, { x: 568, y: 168 }, { x: 565, y: 167 }, { x: 562, y: 166 }, { x: 559, y: 164 }, { x: 555, y: 162 },
  { x: 551, y: 161 }, { x: 548, y: 160 }, { x: 544, y: 160 }, { x: 539, y: 159 }, { x: 536, y: 157 }, { x: 533, y: 156 }, { x: 529, y: 155 }, { x: 525, y: 153 }, { x: 521, y: 152 }, { x: 517, y: 150 }, { x: 513, y: 148 }, { x: 510, y: 147 }, { x: 507, y: 146 },
  { x: 503, y: 145 }, { x: 497, y: 142 }, { x: 493, y: 140 }, { x: 490, y: 138 }, { x: 487, y: 137 },
  { x: 483, y: 135 }, { x: 477, y: 131 }, { x: 474, y: 129 }, { x: 470, y: 126 }, { x: 467, y: 124 }, { x: 464, y: 121 }, { x: 460, y: 118 }, { x: 456, y: 117 }, { x: 453, y: 114 }, { x: 450, y: 112 }, { x: 446, y: 112 }, { x: 443, y: 110 }, { x: 440, y: 106 }, { x: 437, y: 105 }, { x: 434, y: 104 }, { x: 431, y: 103 }, { x: 428, y: 101 }, { x: 425, y: 99 }, { x: 422, y: 98 }, { x: 419, y: 97 },
  { x: 416, y: 94 }, { x: 413, y: 91 }, { x: 410, y: 89 }, { x: 407, y: 87 },
  { x: 404, y: 85 }, { x: 402, y: 82 }, { x: 399, y: 80 }, { x: 395, y: 77 }, { x: 392, y: 75 }, { x: 389, y: 74 },
  { x: 386, y: 74 }, { x: 382, y: 74 }, { x: 379, y: 74 }, { x: 375, y: 71 }, { x: 372, y: 71 }, { x: 369, y: 70 },
  { x: 365, y: 69 }, { x: 361, y: 68 }, { x: 357, y: 67 }, { x: 354, y: 66 }, { x: 351, y: 66 }, { x: 348, y: 65 }, { x: 345, y: 65 }, { x: 341, y: 63 }, { x: 338, y: 62 }, { x: 334, y: 61 }, { x: 331, y: 60 }, { x: 328, y: 60 }, { x: 325, y: 60 }, { x: 322, y: 60 }, { x: 319, y: 60 }, { x: 316, y: 60 }, { x: 313, y: 60 }, { x: 310, y: 60 }, { x: 307, y: 60 },
  { x: 304, y: 60 }, { x: 300, y: 61 }, { x: 297, y: 62 }, { x: 294, y: 63 }, { x: 290, y: 65 }, { x: 287, y: 65 }, { x: 283, y: 65 }, { x: 280, y: 66 }, { x: 275, y: 68 }, { x: 272, y: 70 }, { x: 267, y: 70 }, { x: 264, y: 71 }, { x: 261, y: 72 }, { x: 258, y: 73 }, { x: 255, y: 74 }, { x: 251, y: 75 }, { x: 247, y: 77 }, { x: 244, y: 78 },
  { x: 241, y: 79 }, { x: 238, y: 80 }, { x: 232, y: 82 }, { x: 228, y: 83 }, { x: 225, y: 83 }, { x: 222, y: 84 }, { x: 219, y: 85 }, { x: 216, y: 86 }, { x: 212, y: 87 },
  { x: 208, y: 88 }, { x: 204, y: 89 }, { x: 201, y: 90 }, { x: 197, y: 91 }, { x: 194, y: 92 }, { x: 191, y: 93 }, { x: 188, y: 95 }, { x: 185, y: 96 }, { x: 182, y: 97 },
  { x: 179, y: 98 }, { x: 175, y: 100 }, { x: 173, y: 103 }, { x: 173, y: 106 }, { x: 172, y: 109 }, { x: 170, y: 112 }, { x: 169, y: 115 }, { x: 166, y: 117 }, { x: 164, y: 120 }, { x: 162, y: 123 },
  { x: 159, y: 125 }, { x: 156, y: 128 }, { x: 154, y: 131 }, { x: 151, y: 133 }, { x: 148, y: 135 }, { x: 145, y: 136 }, { x: 142, y: 137 }, { x: 139, y: 138 }, { x: 136, y: 140 }, { x: 133, y: 141 }, { x: 130, y: 141 }, { x: 127, y: 142 }, { x: 124, y: 142 }, { x: 121, y: 142 }, { x: 118, y: 142 }, { x: 114, y: 142 },
  { x: 111, y: 142 }, { x: 108, y: 142 },
  { x: 104, y: 144 }, { x: 101, y: 146 }, { x: 99, y: 149 }, { x: 95, y: 151 }, { x: 92, y: 153 }, { x: 90, y: 156 }, { x: 87, y: 159 }, { x: 84, y: 161 }, { x: 83, y: 164 }, { x: 82, y: 167 },
  { x: 81, y: 170 }, { x: 78, y: 171, t: 398000 }
];

const linePoints3 = [
  { t: 0,x: 477, y: 779 }, { x: 477, y: 778 }, { x: 477, y: 775 }, { x: 478, y: 772 }, { x: 478, y: 769 },
  { x: 479, y: 766 }, { x: 479, y: 763 }, { x: 479, y: 760 }, { x: 480, y: 757 }, { x: 480, y: 754 }, { x: 480, y: 751 }, { x: 480, y: 748 }, { x: 480, y: 745 },
  { x: 480, y: 742 }, { x: 479, y: 739 }, { x: 479, y: 736 }, { x: 478, y: 733 }, { x: 478, y: 730 },
  { x: 476, y: 727 }, { x: 473, y: 725 }, { x: 470, y: 724 }, { x: 469, y: 721 }, { x: 468, y: 718 }, { x: 465, y: 715 }, { x: 462, y: 712 },
  { x: 462, y: 709 }, { x: 459, y: 707 }, { x: 457, y: 704 }, { x: 455, y: 701 }, { x: 454, y: 698 }, { x: 451, y: 694 },
  { x: 448, y: 690 }, { x: 446, y: 687 }, { x: 442, y: 684 }, { x: 439, y: 682 }, { x: 436, y: 679 }, { x: 433, y: 676 }, { x: 431, y: 672 }, { x: 429, y: 669 },
  { x: 427, y: 664 }, { x: 423, y: 660 }, { x: 418, y: 654 }, { x: 413, y: 648 }, { x: 410, y: 645 }, { x: 406, y: 640 }, { x: 403, y: 636 }, { x: 400, y: 633 }, { x: 395, y: 626 },
  { x: 393, y: 623 }, { x: 391, y: 620 }, { x: 389, y: 617 }, { x: 387, y: 612 }, { x: 385, y: 608 }, { x: 382, y: 604 }, { x: 382, y: 598 },
  { x: 381, y: 595 },
  { x: 379, y: 592 }, { x: 379, y: 589 }, { x: 377, y: 585 }, { x: 376, y: 581 }, { x: 375, y: 578 }, { x: 373, y: 575 }, { x: 371, y: 571 },
  { x: 370, y: 566 }, { x: 368, y: 562 }, { x: 368, y: 557 }, { x: 368, y: 554 }, { x: 368, y: 549 }, { x: 367, y: 544 }, { x: 367, y: 540 },
  { x: 367, y: 537 }, { x: 367, y: 533 }, { x: 367, y: 530 }, { x: 367, y: 527 },
  { x: 367, y: 524 }, { x: 367, y: 521 }, { x: 367, y: 516 }, { x: 367, y: 513 }, { x: 367, y: 509 }, { x: 368, y: 506 },
  { x: 368, y: 503 }, { x: 369, y: 499 }, { x: 370, y: 496 }, { x: 373, y: 490 }, { x: 375, y: 487 }, { x: 376, y: 484 }, { x: 376, y: 481 }, { x: 376, y: 478 },
  { x: 376, y: 474 }, { x: 376, y: 471 }, { x: 376, y: 468 }, { x: 376, y: 464 }, { x: 376, y: 459 }, { x: 376, y: 456 }, { x: 376, y: 453 }, { x: 376, y: 447 },
  { x: 376, y: 443 }, { x: 376, y: 440 }, { x: 376, y: 437 }, { x: 374, y: 433 }, { x: 374, y: 430 }, { x: 373, y: 427 }, { x: 373, y: 423 },
  { x: 373, y: 419 }, { x: 373, y: 415 }, { x: 372, y: 411 }, { x: 371, y: 408 }, { x: 369, y: 403 }, { x: 366, y: 399 }, { x: 364, y: 395 }, { x: 362, y: 391 }, { x: 359, y: 387 },
  { x: 359, y: 382 }, { x: 357, y: 379 }, { x: 353, y: 373 }, { x: 349, y: 366 }, { x: 346, y: 360 }, { x: 343, y: 353 },
  { x: 341, y: 350 }, { x: 339, y: 347 }, { x: 337, y: 344 }, { x: 334, y: 337 }, { x: 330, y: 330 }, { x: 327, y: 325 }, { x: 324, y: 321 },
  { x: 322, y: 317 }, { x: 320, y: 313 }, { x: 318, y: 310 }, { x: 318, y: 305 }, { x: 317, y: 299 }, { x: 316, y: 295 }, { x: 315, y: 291 },
  { x: 314, y: 288 }, { x: 313, y: 285 }, { x: 313, y: 281 }, { x: 312, y: 278 }, { x: 312, y: 275 },
  { x: 312, y: 271 }, { x: 312, y: 268 }, { x: 312, y: 265 }, { x: 312, y: 259 }, { x: 312, y: 255 }, { x: 312, y: 250 }, { x: 312, y: 246 },
  { x: 312, y: 242 }, { x: 313, y: 237 }, { x: 313, y: 233 }, { x: 313, y: 225 }, { x: 313, y: 217 }, { x: 313, y: 208 },
  { x: 313, y: 202 }, { x: 314, y: 196 }, { x: 315, y: 190 }, { x: 316, y: 185 }, { x: 317, y: 182 }, { x: 317, y: 179 },
  { x: 317, y: 175 }, { x: 319, y: 168 }, { x: 321, y: 162 }, { x: 323, y: 156 }, { x: 325, y: 151 }, { x: 326, y: 147 }, { x: 327, y: 143 },
  { x: 328, y: 138 }, { x: 329, y: 135 }, { x: 329, y: 132 }, { x: 329, y: 127 }, { x: 330, y: 121 }, { x: 331, y: 116 }, { x: 334, y: 110 },
  { x: 336, y: 104 }, { x: 337, y: 99 }, { x: 340, y: 93 }, { x: 342, y: 89 }, { x: 343, y: 85 },
  { x: 343, y: 80 }, { x: 344, y: 75 }, { x: 346, y: 70 }, { x: 348, y: 67 }, { x: 350, y: 62 }, { x: 352, y: 59 }, { x: 353, y: 54 },
  { x: 353, y: 51 },
  { x: 354, y: 46 }, { x: 356, y: 41 },
  { x: 358, y: 33 }, { x: 361, y: 29 }, { x: 362, y: 25 }, { x: 364, y: 21 }, { x: 365, y: 18 },
  { x: 366, y: 15 }, { x: 367, y: 12 }, { x: 369, y: 9 }, { x: 371, y: 6 }, { x: 373, y: 2, t:374000}
];

const monologue1 = [ // BNF 0BF
  { start: 0, t: '', program: 'fastPulse' },
  { start: 5, t: 'Welcome to eARth!', program: 'fastPulse' },
  { start: 11, t: 'I’m A-a-a-cusia, your host', i: false, xbg: 0x008800 }, // The A-a-a- could stay on the screen for a longer while.
  { start: 19, t: 'Today, we are going to take a walk by the shore', p2: -0.01 },
  { start: 33, t: 'Walking pace: andante' },
  { start: 38, t: '75 bpm, like a relaxed heartbeat', program: 'thinPaced' },
  { start: 45, t: 'We’re observing the landscape: ', p2: -0.1 },
  { start: 52, t: 'left, middle, right, up and down' },
  { start: 60, t: 'Catching the rhythms of a new nature around us' },
  { start: 72, t: 'Everything, ' },
  { start: 75, t: 'including the smallest wave' },
  { start: 80, t: 'and the weakest Wi-Fi signal' },
  { start: 85, t: 'is so alive that it hurts the eARs' },
  { start: 124, t: 'An insect robot flying by...' },
  { start: 131, t: 'clang shiing', i: true, program: 'lasVegas' },
  { start: 149, t: 'Then a drone...' },
  { start: 155, t: 'swoosh', i: true, program: 'thinPaced' },
  { start: 165, t: 'I feel dizzy, ' },
  { start: 173, t: 'Acusi-a-a-a losing balance' },
  { start: 196, t: '', program: 'lasVegas' },
  { start: 198, t: 'Still walking', program: 'thinnerPaced' },
  { start: 216, t: 'Can you hear the push and roar of blood?' },
  { start: 226, t: 'My muscles sliding past one another?', program: 'thinPaced' },
  { start: 246, t: '', program: 'thinnerPaced' },
  { start: 286, t: '', program: 'thinPaced' },
  { start: 286, end: 293 ,t: 'Slowing down to andante grazioso, 60 bpm' },
  { start: 293, t: 'To reduce wind on the mic',program: 'mediumPulse' },
  { start: 300, t: 'We’re heading towards a distant chatter' },
  { start: 310, end: 320 ,t: 'Moving closer and closer to the sound...' },
  { start: 340, end: 365 ,t: '', program: 'fastPulse' },
  { start: 372, t: '... closer and closer, until: ' },
  { start: 384, t: 'clink clank gong', i: true },
  { start: 388, t: 'We just hit a group of bot actors' },
  { start: 394, t: 'But they give us no resonance, ',program: 'mediumPulse' },
  { start: 402, t: 'only catch-all responses...' },
  { start: 409, t: 'Sorry, I do not understand.', i: true },
  { start: 414, t: 'Tell me more about it.', i: true, program: 'mediumPulse' },
  { start: 419, t: 'Is that what you think?', i: true },
  { start: 424, t: 'Not real but skeuomorphic reactions... ' },
  { start: 430, t: '0uch1', i: true}
];

const monologue2 = [ // TW6 1EW
  { start: 0, end: 5 ,t: '', program: 'fastPulse' },
  { start: 18, t: 'The future is implanted' },
  { start: 32, t: 'I’m adjusting my eARs...', program: 'mediumPulse' },
  { start: 47, t: 'Hearing is omnidirectional first, ', program: 'thinnerPaced' },
  { start: 55, t: 'then echolocative', program: 'thinnerPaced' },
  { start: 105, t: 'Self-echoes' },
  { start: 109, t: 'Other-echoes' },
  { start: 115, t: 'Impersonal echoes' },
  { start: 128, t: 'Hello' },
  { start: 132, t: '— Heeellooo', i: true },
  { start: 137, t: 'Acusia' },
  { start: 140, t: '— Ack-acusia, Ack-acusia, Ack-acusia', i: true},
  { start: 150, t: 'My voice comes back to me as if from another' },
  { start: 162, t: 'Hello?' },
  { start: 169, t: '— Allusia?', i: true},
  { start: 180, t: 'I’ll follow the vibrating air, ' },
  { start: 190, t: 'the air that reaches from here to there' },
  { start: 200, t: 'To find out who it is' },
  { start: 210, t: 'Or who they are' },
  { start: 215, t: 'AGGLUTIA!' },
  { start: 224, t: 'My aural body is hypertrophic, ' },
  { start: 230, t: 'growing everywhere' },
  { start: 235, t: 'Bouncing off the surfaces of this airport' },
  { start: 242, t: 'And penetrated by the surrounding elements' },
  { start: 250, t: 'Voices from advertisements enter my volume...', program: 'hypno' },
  { start: 260, t: 'Ready to test the upper and lower limits of your sensory wetware?', i: true, program: 'hypno' },
  { start: 270, t: 'Dip into our sound bath for the ultimate rhythmic and timbral intensity', i: true, program: 'hypno' },
  { start: 285, t: 'or dive deeper for frequencies that can only be felt, seen, tasted or smelled, ', i: true, program: 'hypno' },
  { start: 300, t: 'yet never heard.', i: true, program: 'hypno' },
  { start: 310, t: 'You are a floating subject...', i: true, program: 'hypno' },
  { start: 320, t: 'Mixing with the sound of someone chewing gum: ' },
  { start: 330, t: 'wub wub wub', i: true},
  { start: 335, t: 'Wub wub...', i: true},
  { start: 340, t: 'backbeat, hypnosis' },
  { start: 350, t: 'Stretching to match the deep space broadcasts that I’m picking up' },
  { start: 370, t: 'Now I’m turning on parabolic hearing' },
  { start: 380, t: 'Tuning into other eARsets everywhere' },
  { start: 390, t: 'When I find yours, I’ll be back!'}
];

const monologue3 = [ // EC2M 1BB
  { start: 0, t: '', program: 'fastPulse' },
  { start: 20, t: 'Hey guys, I’m back!', program: 'fastPulse' },
  { start: 30, t: 'This is a train ride from 50.8429° N, 0.1313° W to EX 0-' },
  { start: 40, t: 'Noises from electronic devices, ' },
  { start: 50, t: 'announcements and interferences come in waves' },
  { start: 60, t: 'and rhythms...' },
  { start: 70, t: 'skrrreeek beep beep...', i: true },
  { start: 80, t: 'next stop: eARth', i: true },
  { start: 90, t: 'Tunnels create on/off pulses' },
  { start: 100, t: 'Hat xi...', i: true },
  { start: 110, t: 'a sneeze' },
  { start: 120, t: 'Sifaka sifaka sifaka...', i: true },
  { start: 130, t: 'the march of microbial communities' },
  { start: 140, t: 'from one person to the next' },
  { start: 150, t: 'Bacteria-sex, molecular-sex, nuclide-sex, quark-sex (fading out)'},
  { start: 180, t: 'Too much information' },
  { start: 190, t: 'Sounds additional to useful data in the processing system' },
  { start: 200, t: 'My balms are sweaty' },
  { start: 210, t: 'I’m short of breath, ' },
  { start: 220, t: 'and the mouth feels dry' },
  { start: 230, t: 'Becoming hyper, Achoo-sia' },
  { start: 240, t: 'The approaching station transmits a viral signal: ' },
  { start: 250, t: '00 procedure 01 for all listeners 02 plant earworms...', i: true },
  { start: 270, t: 'As the journey continues' },
  { start: 280, t: 'and the train starts moving faster and faster' },
  { start: 300, t: 'the signal becomes weaker and weaker...' },
  { start: 320, t: '03 if resonant 04 then contagious', i: true },
  { start: 350, t: 'Way past the station, ' },
  { start: 360, t: 'it’s still ringing in my eARs' }
];

function transformPoints(points, scale, x, y) {
  return points.map((p) => {
    const el = {
      x: p.x * scale + x,
      y: p.y * scale + y,
      t: p.t,
      i: p.i
    };

    if (p.m) el.m = p.m;

    return el;
  });
}

function addTimecodeSegment(startIndex, points) {
  let index = startIndex;
  const startTimecode = points[index].t;
  index++;

  while (points[index].t === undefined) {
    index++;
  }
  const endIndex = index;

  const endTimecode = points[index].t;

  for (let i = startIndex + 1; i < endIndex; i++) {
    points[i].t =
      startTimecode +
      parseInt(
        (endTimecode - startTimecode) / (endIndex - startIndex) * (i - startIndex)
      , 10);
  }

  return {
    points,
    index,
    eof: index === points.length - 1
  };
}

function addTimecode(points) {
  let result = addTimecodeSegment(0, points);
  while (!result.eof) {
    result = addTimecodeSegment(result.index, result.points);
  }
  return result.points;
}

export const programData = [
  {
    monologue: monologue1,
    points: addTimecode(transformPoints(linePoints1, 1, 0, 0)),
    sound: 'scene1.mp3',
    name: 'BN2 0BF',
    coords: [50.823289, -0.136557],
    date: 'Monday 2 October 2015',
    time: 12123
  },
  {
    monologue: monologue2,
    points: addTimecode(transformPoints(linePoints2, 1, 0, 0)),
    sound: 'scene2.mp3',
    name: 'TW6 1EW',
    coords: [50.823289, -0.136557],
    date: 'Tuesday 2 October 2015',
    time: 12123
  },
  {
    monologue: monologue3,
    points: addTimecode(transformPoints(linePoints3, 1, 0, 0)),
    sound: 'scene3.mp3',
    name: 'EC2M 1BB',
    coords: [50.823289, -0.136557],
    date: 'Friday 2 October 2015',
    time: 12123
  }
];
