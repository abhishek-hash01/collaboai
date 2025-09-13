import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const serviceAccount = {
  // FIXME: Replace with your actual Firebase service account credentials
  projectId: "collaboai-fcbee",
  clientEmail: "firebase-adminsdk-fbsvc@collaboai-fcbee.iam.gserviceaccount.com",
  privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC6b0BGQcODb0dB\noeTNWFO08Kgnwbr8KomV25B6hbR2mNLxt7CGYojRPqnnzZ64AaF6MyALivM+RuBW\nPzIWqi5eN8g9dcN5wVWvMKvyMEk7d8liOPznpH4oLWu9NgLAOTaoQ4NgZKXNdeUS\nPeZEhRCYhienD//EjpuWAbExxXMJZK3pWEsvH4WmwRJx92Z+hZjcEf1OPsPk+V/6\nHtPohvzrlWLe3F68e/zQBoeCIYOXgarBDhWrwrBzx2KBCW+QpKjuSmQnzuF7zB4w\ngY/NEGVAP3diz45NBIJQA//KHcUn/tpvYjR4ja4X/QqpwfMQgEP3Isy5skyJhNEj\nle0HgnqVAgMBAAECggEAAlgTvs5k3uovQyv97HcH1maQNq/A4hrG0BOKpX+43STe\nwhtFJOtoPPlEuZ1kOXwLw7WQ2ZRNqqLJf0wcHRzWqGibI+qvIoDDywgZoVnqEc1X\nwtxkkaUH0QmBKUfckP4nKcZviG67hvHMh4YvtvzVUJWfOgKBfL8uRZyP1chdweh0\npxaE7NMVZpcE/Ka0vXjRrtdwTy2YT9sf/AUmmbW3GVrmLNHm2iBQT/R6b9GWXOmx\n+PT63GpBcG2MdubKzBqLaYAVzg6kuWJJEzN8LWVm+ynRNKWgXMM5XtBDxssADT1D\nSKjm8si7QReCwKxiXy12g46pNknVjVsdJappcDuqoQKBgQDl/3+ut5IrO3LXGC/z\netf8jLtFBQPL4YUuZiMTHdynvxFuAlrP/uShfci7ug6/3MbX0w30PzoYPI5Ud9NQ\nE4+GMj0XXGI/tySwJxKaTqtqMx6m1kUc5ON1yWopmkmdEan2X5NAYZpoe3HfN2tN\ngWZLipPrvfLmmbl752NW/kkYYwKBgQDPgvUwjesbw2h13FwkqvXzZ9g59WBopmzJ\ndJAQrfwZz+7562UTs+ieWDWYvOGe6e9dSkmB7C/JFzoFMnO7K+OTztlSV7ZUtgyR\nnSSWxfs7fzXTgvY+9K9Mg5uEdc0PKJBg+p/aFwy8WJPqxKBDhTYHBQwnhfxXRpPg\nLWwHi13GpwKBgE32UIqh8Ss0aJYevcpTvrj931DjBUlr9aAnwQXu3mgCLV9T7wKI\nTWmsYIm55NwGc2SfRyCe+gtTI4/gWkHPj5wWlXzAtRER/J61b+ncduB12ZMGGMFV\nmQDJOHJHuWJDpZA9D4YIT7XQ+mWGvJm2Hj3HCKMlbRvbyfMFGThY0+AvAoGAHTWY\n39nKM2FBLf3ztnGeJ0IBzL6+cFykyYKv2Lk02ElNoT5CPxC++LL/8Fz+AUl6mQ4g\n5LnjTBIJ57tfUQRvh1nBe3a/QpNRl5mgEd0SbSCN6hTwJpJ4rnOEC5QtZinWkOAW\najN+ZnCteYlt6bMxlLFgMZwJlhtoK1EZeMJkU9cCgYBkPOUVRfMV0zkLpFq5uFdh\ntxPPSv/evUZk+VLY00DfUB68JMLJ4yFkFH3AOGWqfupDG8PrcgjYENpwoGn99krg\nUzP3A+JX5jK/IevkcwEOit/eowyq5FLKc6sR5J+S6ZAQwBYlhXbZMhOVbWfF+N5f\nTzXUtZ5Fvrcp6SH6diIzDQ==\n-----END PRIVATE KEY-----\n",
};

// Initialize Firebase
if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

const adminAuth = getAuth();

export { adminAuth };