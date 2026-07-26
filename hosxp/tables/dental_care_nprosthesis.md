# `dental_care_nprosthesis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_care_nprosthesis_id | int(11) | NO | PRI | 0 |  |  |
| dental_care_nprosthesis_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dental_care_nprosthesis_name | dental_care_nprosthesis_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dental_care_nprosthesis_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "dental_care_nprosthesis_id": 1,
    "dental_care_nprosthesis_name": "ต้องใส่ฟันเทียมบนและล่าง",
    "hos_guid": null
  },
  {
    "dental_care_nprosthesis_id": 2,
    "dental_care_nprosthesis_name": "ต้องใส่ฟันเทียมบน",
    "hos_guid": null
  },
  {
    "dental_care_nprosthesis_id": 3,
    "dental_care_nprosthesis_name": "ต้องใส่ฟันเทียมล่าง",
    "hos_guid": null
  },
  {
    "dental_care_nprosthesis_id": 4,
    "dental_care_nprosthesis_name": "ไม่ต้องใส่ฟันเทียม",
    "hos_guid": null
  }
]
```
