# `lab_priority`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_priority_id | int(11) | NO | PRI | 0 |  |  |
| lab_priority_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_lab_priority_name | lab_priority_name | yes | 1 |
| PRIMARY | lab_priority_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "lab_priority_id": 1,
    "lab_priority_name": "ปกติ",
    "hos_guid": "{0F312DCC-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "lab_priority_id": 2,
    "lab_priority_name": "ด่วน",
    "hos_guid": "{0F3132B0-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "lab_priority_id": 3,
    "lab_priority_name": "ด่วนที่สุด",
    "hos_guid": "{0F31362D-E5DA-11DF-BBCF-F3CA1C2D0000}"
  }
]
```
