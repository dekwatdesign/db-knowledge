# `forensic_police`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| forensic_police_id | int(11) | NO | PRI | 0 |  |  |
| forensic_police_name | varchar(255) | YES |  | NULL |  |  |
| division_full_name | varchar(100) | YES |  | NULL |  |  |
| region_full_name | varchar(100) | YES |  | NULL |  |  |
| org_code | varchar(5) | YES |  | NULL |  |  |
| kk_code | varchar(5) | YES |  | NULL |  |  |
| bk_code | varchar(5) | YES |  | NULL |  |  |
| bh_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | forensic_police_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "forensic_police_id": 1,
    "forensic_police_name": "สน.พระราชวัง",
    "division_full_name": "กองบังคับการตำรวจนครบาลที่ 6",
    "region_full_name": "กองบัญชาการตำรวจนครบาล",
    "org_code": "60002",
    "kk_code": "60002",
    "bk_code": "20136",
    "bh_code": "10008"
  },
  {
    "forensic_police_id": 2,
    "forensic_police_name": "สน.สําราญราษฎร์",
    "division_full_name": "กองบังคับการตำรวจนครบาลที่ 6",
    "region_full_name": "กองบัญชาการตำรวจนครบาล",
    "org_code": "60001",
    "kk_code": "60001",
    "bk_code": "20136",
    "bh_code": "10008"
  },
  {
    "forensic_police_id": 3,
    "forensic_police_name": "สน.ชนะสงคราม",
    "division_full_name": "กองบังคับการตำรวจนครบาลที่ 1",
    "region_full_name": "กองบัญชาการตำรวจนครบาล",
    "org_code": "60005",
    "kk_code": "60005",
    "bk_code": "20131",
    "bh_code": "10008"
  },
  {
    "forensic_police_id": 4,
    "forensic_police_name": "สน.ดุสิต",
    "division_full_name": "กองบังคับการตำรวจนครบาลที่ 1",
    "region_full_name": "กองบัญชาการตำรวจนครบาล",
    "org_code": "60007",
    "kk_code": "60007",
    "bk_code": "20131",
    "bh_code": "10008"
  },
  {
    "forensic_police_id": 5,
    "forensic_police_name": "สน.สามเสน",
    "division_full_name": "กองบังคับการตำรวจนครบาลที่ 1",
    "region_full_name": "กองบัญชาการตำรวจนครบาล",
    "org_code": "60006",
    "kk_code": "60006",
    "bk_code": "20131",
    "bh_code": "10008"
  },
  {
    "forensic_police_id": 6,
    "forensic_police_name": "สน.สุวินทวงศ์",
    "division_full_name": "กองบังคับการตำรวจนครบาลที่ 3",
    "region_full_name": "กองบัญชาการตำรวจนครบาล",
    "org_code": "60084",
    "kk_code": "60084",
    "bk_code": "20133",
    "bh_code": "10008"
  },
  {
    "forensic_police_id": 7,
    "forensic_police_name": "สน.หนองจอก",
    "division_full_name": "กองบังคับการตำรวจนครบาลที่ 3",
    "region_full_name": "กองบัญชาการตำรวจนครบาล",
    "org_code": "60024",
    "kk_code": "60024",
    "bk_code": "20133",
    "bh_code": "10008"
  },
  {
    "forensic_police_id": 8,
    "forensic_police_name": "สน.ประชาสำราญ",
    "division_full_name": "กองบังคับการตำรวจนครบาลที่ 3",
    "region_full_name": "กองบัญชาการตำรวจนครบาล",
    "org_code": "60076",
    "kk_code": "60076",
    "bk_code": "20133",
    "bh_code": "10008"
  }
]
```
