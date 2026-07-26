# `handicapped_hhc_complications`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_hhc_complications_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_hhc_complications_name | char(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_hhc_complications_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "handicapped_hhc_complications_id": 1,
    "handicapped_hhc_complications_name": "ข้อติด",
    "hos_guid": null
  },
  {
    "handicapped_hhc_complications_id": 2,
    "handicapped_hhc_complications_name": "แผลกดทับ",
    "hos_guid": null
  },
  {
    "handicapped_hhc_complications_id": 3,
    "handicapped_hhc_complications_name": "ติดเชื้อระบบทางเดินปัสสาวะ",
    "hos_guid": null
  },
  {
    "handicapped_hhc_complications_id": 4,
    "handicapped_hhc_complications_name": "สำลักบ่อย",
    "hos_guid": null
  },
  {
    "handicapped_hhc_complications_id": 5,
    "handicapped_hhc_complications_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
