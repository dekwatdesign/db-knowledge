# `income_std_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| std_group | char(2) | NO | PRI |  |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| print_detail | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | std_group | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "std_group": "01",
    "name": "ค่าห้องและค่าอาหาร",
    "print_detail": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "std_group": "02",
    "name": "ค่าอวัยวะเทียมและอุปกรณ์ในการบำบัดรักษาโรค",
    "print_detail": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "std_group": "03",
    "name": "ค่ายาในบัญชียาหลักแห่งชาติ",
    "print_detail": "N",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "std_group": "04",
    "name": "ค่ายากลับบ้าน",
    "print_detail": "N",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "std_group": "05",
    "name": "ค่าเวชภัณฑ์ที่มิใช่ยา",
    "print_detail": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "std_group": "06",
    "name": "ค่าบริการโลหิตและส่วนประกอบของโลหิต",
    "print_detail": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "std_group": "07",
    "name": "ค่าตรวจวินิจฉัยทางเทคนิคการแพทย์และพยาธิวิทยา",
    "print_detail": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "std_group": "08",
    "name": "ค่าตรวจวินิจฉัยและรักษาทางรังสีวิทยา",
    "print_detail": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
