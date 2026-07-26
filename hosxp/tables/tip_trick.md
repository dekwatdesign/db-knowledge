# `tip_trick`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tip_id | int(11) | NO | PRI | 0 |  |  |
| tip_text | text | YES |  | NULL |  |  |
| tip_type | varchar(25) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tip_id | yes | 1 |
| tip_type | tip_type | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "tip_id": 1,
    "tip_text": "ท่านสามารถค้นหาผู้ป่วยได้โดยใช้ ชื่อ  ,  นามสกุล , ชื่อ และ นามสกุล , หรือ ที่อยู่ ที่หน้าจอค้นหาผู้ป่วย\r\n",
    "tip_type": null,
    "hos_guid": null
  },
  {
    "tip_id": 2,
    "tip_text": "2. ท่านสามารถกำหนดคำช่วยค้นหา (Keyword) หรือ ชื่อย่อ ของยาที่ท่านค้นหาได้โดยการคลิกขวาของเมาส์ตรงรายการยา และ เลือก [กำหนดคำช่วยค้นหา] ตัวอย่างชื่อย่อที่ ท่านเรียกใช้ได้เลยเช่น \r\n    PARACETAMOL 500 MG  ชื่อย่อคือ  P5\r\n    PARACETAMOL syr    คำย่อ คือ   PCS   \r\n\r\n\r\n\r\n PARACETAMOL 325 MG  ชื่อย่อคือ  P3\r\n   \r\n\r\n   \r\n IBUPROFEN 400 MG  คำย่อ คือ    B4\r\n IBUPROFEN 200 MG  คำย่อ คือ    B2",
    "tip_type": null,
    "hos_guid": null
  },
  {
    "tip_id": 3,
    "tip_text": "ท่านสามารถค้นหารหัส ICD10 แบบ Full Keyword ได้โดยการใส่เครื่องหมาย จุด (.) ที่หน้าคำค้นหา",
    "tip_type": null,
    "hos_guid": null
  },
  {
    "tip_id": 4,
    "tip_text": "ท่านสามารถออกแบบหน้าจอสั่ง LAB ได้เอง ",
    "tip_type": null,
    "hos_guid": null
  },
  {
    "tip_id": 5,
    "tip_text": "HOSxP มีระบบตรวจสอบการแพ้ยา และ Drug Interaction ของยาที่สั่งจ่ายได้ โดยอัตโนมัติ , ถ้ากำหนดไว้ในฐานข้อมูลการแพ้ยา และ ฐานข้อมูล Drug Interaction",
    "tip_type": null,
    "hos_guid": null
  },
  {
    "tip_id": 6,
    "tip_text": "ท่านสามารถกำหนดสูตรการสั่งจ่ายยาได้เอง เมื่อต้องการนำมาใช้ เพียงแต่ใส่เครื่องหมาย จุด (.) ที่หน้าชื่อยา จะปรากฏชื่อสูตรการใช้ยา มาให้เลือก",
    "tip_type": null,
    "hos_guid": null
  },
  {
    "tip_id": 7,
    "tip_text": "ในระบบคลินิกพิเศษ ท่านสามารถกำหนดรายการยาที่ต้องใช้ยาต่อเนื่องของคนไข้แต่ละคนได้ ",
    "tip_type": null,
    "hos_guid": null
  },
  {
    "tip_id": 8,
    "tip_text": "ท่านสามารถส่งข้อความไปหาผู้ที่กำลังใช้ระบบได้ โดยการเข้าสู่หน้าจอ Online User และเลือกส่งข้อความ",
    "tip_type": null,
    "hos_guid": null
  }
]
```
