# `club_std`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| club_std_id | int(11) | NO | PRI | 0 |  |  |
| club_std_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | club_std_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "club_std_id": 1,
    "club_std_name": "ผู้สูงอายุ",
    "hos_guid": null
  },
  {
    "club_std_id": 2,
    "club_std_name": "แม่บ้าน",
    "hos_guid": null
  },
  {
    "club_std_id": 3,
    "club_std_name": "ออกกำลังกาย",
    "hos_guid": null
  },
  {
    "club_std_id": 4,
    "club_std_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
