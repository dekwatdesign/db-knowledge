# `provis_ancno`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(1) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
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

## Sample rows (4)

```json
[
  {
    "code": "1",
    "name": "ช่วงที่ 1 อายุครรภ์ 1-27 สัปดาห์ (ก่อน 12 สัปดาห์)",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "2",
    "name": "ช่วงที่ 2 อายุครรภ์ 28-31 สัปดาห์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "3",
    "name": "ช่วงที่ 3 อายุครรภ์ 32-35 สัปดาห์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "4",
    "name": "ช่วงที่ 4 อายุครรภ์ 36-39 สัปดาห์",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
