import { Howl } from 'howler';

import AOrgan from '../assets/audio/organ/A.mp3';
import BOrgan from '../assets/audio/organ/B.mp3';
import COrgan from '../assets/audio/organ/C.mp3';
import DOrgan from '../assets/audio/organ/D.mp3';
import EOrgan from '../assets/audio/organ/E.mp3';
import FOrgan from '../assets/audio/organ/F.mp3';
import GOrgan from '../assets/audio/organ/G.mp3';

export const Audios = {
    organ: {
        'A': new Howl(
            {
                src: [AOrgan],
                sprite: {
                    loopPad: [10000, 480000, true]
                },
                preload: true
            }
        ),
        'B': new Howl(
            {
                src: [BOrgan],
                sprite: {
                    loopPad: [10000, 480000, true]
                },
                preload: true
            }
        ),
        'C': new Howl(
            {
                src: [COrgan],
                sprite: {
                    loopPad: [10000, 480000, true]
                },
                preload: true
            }
        ),
        'D': new Howl(
            {
                src: [DOrgan],
                sprite: {
                    loopPad: [10000, 480000, true]
                },
                preload: true
            }
        ),
        'E': new Howl(
            {
                src: [EOrgan],
                sprite: {
                    loopPad: [10000, 480000, true]
                },
                preload: true
            }
        ),
        'F': new Howl(
            {
                src: [FOrgan],
                sprite: {
                    loopPad: [10000, 480000, true]
                },
                preload: true
            }
        ),
        'G': new Howl(
            {
                src: [GOrgan],
                sprite: {
                    loopPad: [10000, 480000, true]
                },
                preload: true
            }
        ),
    }
}