# `income_sss_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(2) | NO | PRI |  |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "01",
    "name": "ค่าห้องและค่าอาหาร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "02",
    "name": "ค่าอวัยวะเทียมและอุปกรณ์ในการบาบัดรักษา",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "03",
    "name": "ค่ายาและสารอาหารทางเส้นเลือด ใช้ใน รพ.",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "04",
    "name": "ค่ายาและสารอาหารทางเส้นเลือด ใช้ที่บ้าน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "05",
    "name": "ค่าเวชภัณฑ์ที่มิใช่ยา",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "06",
    "name": "ค่าบริการโลหิตและส่วนประกอบของโลหิต",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "07",
    "name": "ค่าตรวจวินิจฉัยทางเทคนิคการแพทย์และพยาธิวิทยา",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "08",
    "name": "ค่าตรวจวินิจฉัยและรักษาทางรังสีวิทยา",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
