# `drg_chrgitem`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drg_chrgitem_id | int(11) | NO | PRI | 0 |  |  |
| drg_chrgitem_name | varchar(150) | YES | UNI | NULL |  |  |
| chrgitem_code1 | char(2) | YES |  | NULL |  |  |
| chrgitem_code2 | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drg_chrgitem_name | drg_chrgitem_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | drg_chrgitem_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drg_chrgitem_id": 1,
    "drg_chrgitem_name": "ค่าห้อง / ค่าอาหาร",
    "chrgitem_code1": "11",
    "chrgitem_code2": "12",
    "hos_guid": null
  },
  {
    "drg_chrgitem_id": 2,
    "drg_chrgitem_name": "อวัยวะเทียม / อุปกรณ์บำบัดรักษา / ค่าใช้จ่ายสูง",
    "chrgitem_code1": "21",
    "chrgitem_code2": "22",
    "hos_guid": null
  },
  {
    "drg_chrgitem_id": 3,
    "drg_chrgitem_name": "ยาและสารอาหารทางเส้นเลือดที่ใช้ใน รพ.",
    "chrgitem_code1": "31",
    "chrgitem_code2": "32",
    "hos_guid": null
  },
  {
    "drg_chrgitem_id": 4,
    "drg_chrgitem_name": "ยาที่นำไปใช้ต่อที่บ้าน",
    "chrgitem_code1": "41",
    "chrgitem_code2": "42",
    "hos_guid": null
  },
  {
    "drg_chrgitem_id": 5,
    "drg_chrgitem_name": "เวชภัณฑ์ที่ไม่ใช่ยา",
    "chrgitem_code1": "51",
    "chrgitem_code2": "52",
    "hos_guid": null
  },
  {
    "drg_chrgitem_id": 6,
    "drg_chrgitem_name": "บริการโลหิต และส่วนประกอบของโลหิต",
    "chrgitem_code1": "61",
    "chrgitem_code2": "62",
    "hos_guid": null
  },
  {
    "drg_chrgitem_id": 7,
    "drg_chrgitem_name": "ตรวจวินิจฉัยทางเทคนิคการแพทย์และพยาธิวิทยา",
    "chrgitem_code1": "71",
    "chrgitem_code2": "72",
    "hos_guid": null
  },
  {
    "drg_chrgitem_id": 8,
    "drg_chrgitem_name": "ตรวจวินิจฉัยและรักษาทางรังสีวิทยา",
    "chrgitem_code1": "81",
    "chrgitem_code2": "82",
    "hos_guid": null
  }
]
```
