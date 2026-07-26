# `supplies_condision`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CONDISION_ID | int | NO | PRI | NULL | auto_increment |  |
| CONDISION_NAME | varchar(255) | YES |  |  |  |  |
| CONDISION_RESION | varchar(500) | YES |  |  |  | เหตุผลในการจัดหา |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CONDISION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "CONDISION_ID": 1,
    "CONDISION_NAME": "ก.ดำเนินการด้วยวิธีประกาศเชิญชวนทั่วไปและวิธีคัดเลือก",
    "CONDISION_RESION": "-"
  },
  {
    "CONDISION_ID": 2,
    "CONDISION_NAME": "ข.ไม่เกินวงเงินที่กำหนดในกฏกระทรวง",
    "CONDISION_RESION": "เนื่องจากการจัดซื้อจัดจ้างพัสดุ ที่มีการผลิต จำหน่าย ก่อสร้าง หรือให้บริการทั่วไป และมีวงเงินในการจัดซื้อจัดจ้างบครั้งหนึ่งไม่เกินวงเงินตามที่กำหนดในกฏกระทรวง"
  },
  {
    "CONDISION_ID": 3,
    "CONDISION_NAME": "ค.มีผู้ประกอบการที่มีคุณสมบัติเพียงรายเดียว",
    "CONDISION_RESION": "-"
  },
  {
    "CONDISION_ID": 4,
    "CONDISION_NAME": "ง.มีความจำเป็นต้องใช้พัสดุโดยฉุกเฉิน",
    "CONDISION_RESION": "-"
  },
  {
    "CONDISION_ID": 5,
    "CONDISION_NAME": "จ.เกี่ยวพันกับพัสดุที่ชื่อไว้ก่อนหน้า",
    "CONDISION_RESION": "-"
  },
  {
    "CONDISION_ID": 6,
    "CONDISION_NAME": "ฉ.เป็นพัสดุจะขายทอดตลาดโดยหน่วยงานของรัฐ",
    "CONDISION_RESION": "-"
  },
  {
    "CONDISION_ID": 7,
    "CONDISION_NAME": "ช.ที่ดิน/สิ่งปลูกสร้างที่ต้องซื้อเฉพาะแห่ง",
    "CONDISION_RESION": "-"
  },
  {
    "CONDISION_ID": 8,
    "CONDISION_NAME": "ซ.กรณีอื่นตามที่กำหนดในกฏกระทรวง",
    "CONDISION_RESION": "-"
  }
]
```
