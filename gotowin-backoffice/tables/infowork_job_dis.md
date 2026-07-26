# `infowork_job_dis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| JOD_DIS_ID | int | NO | PRI | NULL | auto_increment |  |
| JOD_DIS_NAME | varchar(600) | YES |  | NULL |  |  |
| ACTIVE | enum('True','Fales') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | JOD_DIS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "JOD_DIS_ID": 1,
    "JOD_DIS_NAME": "จัดหา/ติดตั้งเครื่องคอมพิวเตอร์ อุปกรณ์ให้ครอบคลุมและเหมาะสมกับความจำเป็นในการใช้งานในโรงพยาบาล",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 10:31:48",
    "created_at": "2020-09-28 10:29:24"
  },
  {
    "JOD_DIS_ID": 2,
    "JOD_DIS_NAME": "จัดหา/ติดตั้งโปรแกรมเพื่อใช้งานในโรงพยาบาลตามแนวทางของคณะกรรมการเทคโนโลยีสารสนเทศของโรงพยาบาล",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 10:32:06",
    "created_at": "2020-09-28 10:31:16"
  },
  {
    "JOD_DIS_ID": 3,
    "JOD_DIS_NAME": "วิเคราะห์และแก้ปัญหา Hardware,Software, Database และ Network ขั้นต้น ก่อนที่จะส่งต่อให้เจ้าหน้าที่ หน่วยงานภายนอก(ถ้ามี : ในกรณีที่จำเป็นต้องใช้บริการสนับสนุนจากหน่วยงานภายนอก)",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 10:32:35",
    "created_at": "2020-09-28 10:32:35"
  },
  {
    "JOD_DIS_ID": 4,
    "JOD_DIS_NAME": "ดูแลและรักษาความปลอดภัยของระบบเครื่อข่ายให้สามารถรองรับการใช้งานได้",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 10:33:05",
    "created_at": "2020-09-28 10:33:05"
  },
  {
    "JOD_DIS_ID": 5,
    "JOD_DIS_NAME": "จัดทำระบบอินทราเน็ตและอินเตอร์เน็ต  โดยมีคณะกรรมเทคโนโลยีสารสนเทศดูแล",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 10:33:35",
    "created_at": "2020-09-28 10:33:35"
  },
  {
    "JOD_DIS_ID": 6,
    "JOD_DIS_NAME": "ให้คำแนะนำแก่บุคลากรภายในโรงพยาบาลด้านการใช้งานเทคโนโลยีสารสนเทศ",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 10:33:55",
    "created_at": "2020-09-28 10:33:55"
  },
  {
    "JOD_DIS_ID": 7,
    "JOD_DIS_NAME": "วางแผนและจัดทำโครงการพัฒนาระบบและติดตามผลการให้บริการผู้ป่วยด้วยโปรแกรม HOSxP",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 10:34:16",
    "created_at": "2020-09-28 10:34:16"
  },
  {
    "JOD_DIS_ID": 8,
    "JOD_DIS_NAME": "งานวิชาการ ประชุม อบรมสัมมนา",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 10:34:36",
    "created_at": "2020-09-28 10:34:36"
  }
]
```
