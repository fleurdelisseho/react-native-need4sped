



export const letters = {
    A:require('../assets/images/abc/Abig.png'),
    B:require('../assets/images/abc/Bbig.png'),
    C:require('../assets/images/abc/Cbig.png'),
    D:require('../assets/images/abc/Dbig.png'),
    E:require('../assets/images/abc/Ebig.png'),
    F:require('../assets/images/abc/Fbig.png'),
    G:require('../assets/images/abc/Gbig.png'),
    H:require('../assets/images/abc/Hbig.png'),
    I:require('../assets/images/abc/Ibig.png'),
    J:require('../assets/images/abc/Jbig.png'),
    K:require('../assets/images/abc/Kbig.png'),
    L:require('../assets/images/abc/Lbig.png'),
    M:require('../assets/images/abc/Mbig.png'),
    N:require('../assets/images/abc/Nbig.png'),
    O:require('../assets/images/abc/Obig.png'),
    P:require('../assets/images/abc/Pbig.png'),
    Q:require('../assets/images/abc/Qbig.png'),
    R:require('../assets/images/abc/Rbig.png'),
    S:require('../assets/images/abc/Sbig.png'),
    T:require('../assets/images/abc/Tbig.png'),
    U:require('../assets/images/abc/Ubig.png'),
    V:require('../assets/images/abc/Vbig.png'),
    W:require('../assets/images/abc/Wbig.png'),
    X:require('../assets/images/abc/Xbig.png'),
    Y:require('../assets/images/abc/Ybig.png'),
    Z:require('../assets/images/abc/Zbig.png'),


    a:require('../assets/images/abc/Asmall.png'),
    b:require('../assets/images/abc/Bsmall.png'),
    c:require('../assets/images/abc/Csmall.png'),
    d:require('../assets/images/abc/Dsmall.png'),
    e:require('../assets/images/abc/Esmall.png'),
    f:require('../assets/images/abc/Fsmall.png'),
    g:require('../assets/images/abc/Gsmall.png'),
    h:require('../assets/images/abc/Hsmall.png'),
    i:require('../assets/images/abc/Ismall.png'),
    j:require('../assets/images/abc/Jsmall.png'),
    k:require('../assets/images/abc/Ksmall.png'),
    l:require('../assets/images/abc/Lsmall.png'),
    m:require('../assets/images/abc/Msmall.png'),
    n:require('../assets/images/abc/Nsmall.png'),
    o:require('../assets/images/abc/Osmall.png'),
    p:require('../assets/images/abc/Psmall.png'),
    q:require('../assets/images/abc/Qsmall.png'),
    r:require('../assets/images/abc/Rsmall.png'),
    s:require('../assets/images/abc/Ssmall.png'),
    t:require('../assets/images/abc/Tsmall.png'),
    u:require('../assets/images/abc/Usmall.png'),
    v:require('../assets/images/abc/Vsmall.png'),
    w:require('../assets/images/abc/Wsmall.png'),
    x:require('../assets/images/abc/Xsmall.png'),
    y:require('../assets/images/abc/Ysmall.png'),
    z:require('../assets/images/abc/Zsmall.png'),
}

 export const letter_recognition = [
    {
        id:1,
        question_letter:letters.A,
        choice1:letters.f,
        choice2:letters.e,
        choice3:letters.b,
        choice4:letters.d,
        choice5:letters.c,
        choice6:letters.a,
        answer:'6'
    },
    {
        id:2,
        question_letter:letters.B,
        choice1:letters.a,
        choice2:letters.b,
        choice3:letters.c,
        choice4:letters.d,
        choice5:letters.e,
        choice6:letters.f,
        answer:'2'
    },
    {
        id:3,
        question_letter:letters.C,
        choice1:letters.x,
        choice2:letters.e,
        choice3:letters.j,
        choice4:letters.d,
        choice5:letters.c,
        choice6:letters.a,
        answer:'5'
    },
    {
        id:4,
        question_letter:letters.D,
        choice1:letters.d,
        choice2:letters.a,
        choice3:letters.c,
        choice4:letters.r,
        choice5:letters.f,
        choice6:letters.v,
        answer:'1'
    },
    {
        id:5,
        question_letter:letters.E,
        choice1:letters.f,
        choice2:letters.k,
        choice3:letters.s,
        choice4:letters.c,
        choice5:letters.e,
        choice6:letters.t,
        answer:'5'
    },
    {
        id:6,
        question_letter:letters.F,
        choice1:letters.d,
        choice2:letters.a,
        choice3:letters.c,
        choice4:letters.f,
        choice5:letters.u,
        choice6:letters.v,
        answer:'4'
    },
    {
        id:7,
        question_letter:letters.G,
        choice1:letters.f,
        choice2:letters.k,
        choice3:letters.g,
        choice4:letters.c,
        choice5:letters.e,
        choice6:letters.t,
        answer:'3'
    },
    {
        id:8,
        question_letter:letters.H,
        choice1:letters.d,
        choice2:letters.a,
        choice3:letters.c,
        choice4:letters.f,
        choice5:letters.u,
        choice6:letters.h,
        answer:'6'
    },
    {
        id:9,
        question_letter:letters.I,
        choice1:letters.f,
        choice2:letters.k,
        choice3:letters.g,
        choice4:letters.i,
        choice5:letters.e,
        choice6:letters.t,
        answer:'4'
    },
    {
        id:10,
        question_letter:letters.J,
        choice1:letters.a,
        choice2:letters.z,
        choice3:letters.q,
        choice4:letters.x,
        choice5:letters.u,
        choice6:letters.j,
        answer:'6'
    },
    {
        id:11,
        question_letter:letters.K,
        choice1:letters.f,
        choice2:letters.k,
        choice3:letters.g,
        choice4:letters.i,
        choice5:letters.e,
        choice6:letters.t,
        answer:'2'
    },
    {
        id:12,
        question_letter:letters.L,
        choice1:letters.a,
        choice2:letters.z,
        choice3:letters.q,
        choice4:letters.l,
        choice5:letters.u,
        choice6:letters.j,
        answer:'4'
    },
    {
        id:13,
        question_letter:letters.M,
        choice1:letters.a,
        choice2:letters.b,
        choice3:letters.m,
        choice4:letters.q,
        choice5:letters.e,
        choice6:letters.f,
        answer:'3'
    },
    {
        id:14,
        question_letter:letters.N,
        choice1:letters.a,
        choice2:letters.n,
        choice3:letters.q,
        choice4:letters.m,
        choice5:letters.u,
        choice6:letters.j,
        answer:'2'
    },
    {
        id:15,
        question_letter:letters.O,
        choice1:letters.a,
        choice2:letters.b,
        choice3:letters.m,
        choice4:letters.u,
        choice5:letters.o,
        choice6:letters.f,
        answer:'5'
    },
    {
        id:16,
        question_letter:letters.P,
        choice1:letters.p,
        choice2:letters.h,
        choice3:letters.q,
        choice4:letters.m,
        choice5:letters.x,
        choice6:letters.j,
        answer:'1'
    },
    {
        id:17,
        question_letter:letters.Q,
        choice1:letters.a,
        choice2:letters.b,
        choice3:letters.m,
        choice4:letters.u,
        choice5:letters.o,
        choice6:letters.q,
        answer:'6'
    },
    {
        id:18,
        question_letter:letters.R,
        choice1:letters.l,
        choice2:letters.k,
        choice3:letters.o,
        choice4:letters.r,
        choice5:letters.s,
        choice6:letters.t,
        answer:'4'
    },
    {
        id:19,
        question_letter:letters.S,
        choice1:letters.s,
        choice2:letters.z,
        choice3:letters.m,
        choice4:letters.u,
        choice5:letters.o,
        choice6:letters.q,
        answer:'1'
    },
    {
        id:20,
        question_letter:letters.T,
        choice1:letters.l,
        choice2:letters.t,
        choice3:letters.o,
        choice4:letters.r,
        choice5:letters.s,
        choice6:letters.t,
        answer:'2'
    },
    {
        id:21,
        question_letter:letters.U,
        choice1:letters.s,
        choice2:letters.z,
        choice3:letters.m,
        choice4:letters.u,
        choice5:letters.o,
        choice6:letters.u,
        answer:'6'
    },
    {
        id:22,
        question_letter:letters.V,
        choice1:letters.c,
        choice2:letters.t,
        choice3:letters.o,
        choice4:letters.v,
        choice5:letters.s,
        choice6:letters.t,
        answer:'4'
    },
    {
        id:23,
        question_letter:letters.W,
        choice1:letters.z,
        choice2:letters.a,
        choice3:letters.w,
        choice4:letters.u,
        choice5:letters.o,
        choice6:letters.f,
        answer:'3'
    },
    {
        id:24,
        question_letter:letters.X,
        choice1:letters.a,
        choice2:letters.b,
        choice3:letters.x,
        choice4:letters.v,
        choice5:letters.s,
        choice6:letters.t,
        answer:'3'
    },
    {
        id:25,
        question_letter:letters.Y,
        choice1:letters.y,
        choice2:letters.z,
        choice3:letters.w,
        choice4:letters.u,
        choice5:letters.o,
        choice6:letters.f,
        answer:'1'
    },
    {
        id:26,
        question_letter:letters.Z,
        choice1:letters.a,
        choice2:letters.b,
        choice3:letters.x,
        choice4:letters.v,
        choice5:letters.s,
        choice6:letters.z,
        answer:'6'
    },
];