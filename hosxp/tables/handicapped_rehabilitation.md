# `handicapped_rehabilitation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_rehabilitation_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_rehabilitation_name | char(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_rehabilitation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "handicapped_rehabilitation_id": 1,
    "handicapped_rehabilitation_name": "ฟื้นฟูโดยกายภาพ",
    "hos_guid": null
  },
  {
    "handicapped_rehabilitation_id": 2,
    "handicapped_rehabilitation_name": "ฟื้นฟูโดยกิจกรรมบำบัด",
    "hos_guid": null
  },
  {
    "handicapped_rehabilitation_id": 3,
    "handicapped_rehabilitation_name": "ฟื้นฟูโดยกายอุปกรณ์",
    "hos_guid": null
  },
  {
    "handicapped_rehabilitation_id": 4,
    "handicapped_rehabilitation_name": "ฟื้นฟูโดยกิจกรรมอื่น ๆ ระบุ",
    "hos_guid": null
  },
  {
    "handicapped_rehabilitation_id": 5,
    "handicapped_rehabilitation_name": "ไม่ได้รับ",
    "hos_guid": null
  }
]
```
