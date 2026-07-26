# `visit_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| noteflag | varchar(250) | YES |  | NULL |  |  |
| groupname | varchar(250) | YES |  | NULL |  |  |
| ptnote | text | YES |  | NULL |  |  |
| user_name | varchar(25) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| write_date_time | datetime | YES |  | NULL |  |  |
| dep_name | varchar(25) | YES | MUL | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| alert_next_visit | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dep_name | dep_name | no | 1 |
| ix_doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "630804083034",
    "noteflag": null,
    "groupname": null,
    "ptnote": "ผู้ปกครองรับทราบค่าบริการและยินยอมชำระเป็นเงินสด งานส่งเสริมแจ้งว่าผู้ป่วยจะมาวันที่ 18 ส.ค.63\r\n",
    "user_name": "[MASKED_FULLNAME]",
    "doctor": "183",
    "write_date_time": "2020-08-04 15:25:23",
    "dep_name": null,
    "note": null,
    "hos_guid": null,
    "alert_next_visit": null
  },
  {
    "vn": "660116152412",
    "noteflag": null,
    "groupname": null,
    "ptnote": "21254",
    "user_name": null,
    "doctor": null,
    "write_date_time": null,
    "dep_name": null,
    "note": null,
    "hos_guid": null,
    "alert_next_visit": null
  },
  {
    "vn": "661030093026",
    "noteflag": null,
    "groupname": null,
    "ptnote": "ปรับยาไป อารมณ์หงุดหงิดมากขึ้น พฤติกรรมวุ่นวายแบบอยากทำอะไรก็จะทำ\r\nพูดเรื่อยเปื่อย จริงบ้างไม่จริงบ้าง\r\nอยากออกนอกบ้านอย่างเดียว ถ้าไม่ได้ออกหรือขัดใจจะหนีขึ้นไปกรี๊ดบนห้องตัวเอง\r\nยังไม่มีพฤติกรรมหนีออกนอกบ้าน\r\n",
    "user_name": null,
    "doctor": null,
    "write_date_time": null,
    "dep_name": null,
    "note": null,
    "hos_guid": null,
    "alert_next_visit": null
  },
  {
    "vn": "661030103026",
    "noteflag": null,
    "groupname": null,
    "ptnote": "ได้เกรดเทอมต้น ม. 1 = 1.5 \r\nไม่ได้วิชาเลข และการงาน เพราะไม่เคยทำงานบ้าน\r\nไม่ได้ไปเรียนพิเศษ เพราะยายอยากให้ดูแลตา(พี่ชายยายที่เป็น dementia)\r\nต่อว่ายายที่ไม่ให้ไปเรียนพิเศษ\r\nส่งงานไม่ครบ ครูคอยทวงตอนใกล้สอบ",
    "user_name": null,
    "doctor": null,
    "write_date_time": null,
    "dep_name": null,
    "note": null,
    "hos_guid": null,
    "alert_next_visit": null
  },
  {
    "vn": "670801083036",
    "noteflag": null,
    "groupname": null,
    "ptnote": "นัดหน้า 25/12/67 10.00น.",
    "user_name": null,
    "doctor": null,
    "write_date_time": null,
    "dep_name": null,
    "note": null,
    "hos_guid": null,
    "alert_next_visit": null
  },
  {
    "vn": "670801093028",
    "noteflag": null,
    "groupname": null,
    "ptnote": "นัด 3/12/67 10.00",
    "user_name": null,
    "doctor": null,
    "write_date_time": null,
    "dep_name": null,
    "note": null,
    "hos_guid": null,
    "alert_next_visit": null
  },
  {
    "vn": "670801093042",
    "noteflag": null,
    "groupname": null,
    "ptnote": "6/11/67 9.30น. ",
    "user_name": null,
    "doctor": null,
    "write_date_time": null,
    "dep_name": null,
    "note": null,
    "hos_guid": null,
    "alert_next_visit": null
  },
  {
    "vn": "670808083022",
    "noteflag": null,
    "groupname": null,
    "ptnote": "นัด17/12/67 9.30",
    "user_name": null,
    "doctor": null,
    "write_date_time": null,
    "dep_name": null,
    "note": null,
    "hos_guid": null,
    "alert_next_visit": null
  }
]
```
