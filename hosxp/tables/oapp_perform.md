# `oapp_perform`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(250) | NO | PRI |  |  |  |
| order_number | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "name": "กรุณานำบัตร รพ. และบัตรรับรองสิทธิ์ (ถ้ามี) มาด้วย",
    "order_number": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "กรุณานำใบนัดมาด้วย",
    "order_number": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "กรุณานำใบส่งตัว (ถ้ามี) มาด้วย",
    "order_number": 2,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "กรุณามาเจาะเลือดก่อนพบแพทย์ 1 ชั่วโมง",
    "order_number": 3,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "การตรวจใช้เวลา 1-1.30 ชั่วโมง",
    "order_number": 4,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "กินยาสมาธิสั้นได้ตามปกติ",
    "order_number": 5,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "งดเฉพาะยามื้อเช้า ไม่ต้องงดอาหาร",
    "order_number": 9,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "งดน้ำและอาหาร 10-12 ชั่วโมง (หลัง 2 ทุ่ม)",
    "order_number": 6,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
