# `income_report2`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| group_id | tinyint(4) | NO | PRI | 0 |  |  |
| group_name | varchar(250) | YES | MUL | NULL |  |  |
| cscd_group | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| eng_name | varchar(60) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| group_name | group_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "group_id": 1,
    "group_name": "ค่าห้อง/ค่าอาหาร",
    "cscd_group": "1",
    "hos_guid": null,
    "hos_guid_ext": null,
    "eng_name": "Room"
  },
  {
    "group_id": 2,
    "group_name": "อวัยวะเทียม/อุปกรณ์ในการบำบัดรักษา",
    "cscd_group": "2",
    "hos_guid": null,
    "hos_guid_ext": null,
    "eng_name": "Prosthesis"
  },
  {
    "group_id": 3,
    "group_name": "ยาและสารอาหารทางเส้นเลือดที่ใช้ใน รพ.",
    "cscd_group": "3",
    "hos_guid": null,
    "hos_guid_ext": null,
    "eng_name": "Drug"
  },
  {
    "group_id": 4,
    "group_name": "ยาที่นำไปใช้ต่อที่บ้าน",
    "cscd_group": "3",
    "hos_guid": null,
    "hos_guid_ext": null,
    "eng_name": "MedHome"
  },
  {
    "group_id": 5,
    "group_name": "เวชภัณฑ์ที่ไม่ใช่ยา",
    "cscd_group": "5",
    "hos_guid": null,
    "hos_guid_ext": null,
    "eng_name": "NonDrug"
  },
  {
    "group_id": 6,
    "group_name": "บริการโลหิตและส่วนประกอบของโลหิต",
    "cscd_group": "6",
    "hos_guid": null,
    "hos_guid_ext": null,
    "eng_name": "Boold"
  },
  {
    "group_id": 7,
    "group_name": "ตรวจวินิจฉัยทางเทคนิคการแพทย์และพยาธิวิทยา",
    "cscd_group": "7",
    "hos_guid": null,
    "hos_guid_ext": null,
    "eng_name": "Lab"
  },
  {
    "group_id": 8,
    "group_name": "ตรวจวินิจฉัยและรักษาทางรังสีวิทยา",
    "cscd_group": "8",
    "hos_guid": null,
    "hos_guid_ext": null,
    "eng_name": "Xray"
  }
]
```
