# `elder_join_club`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_join_club_id | int(11) | NO | PRI | 0 |  |  |
| elder_join_club_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_join_club_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "elder_join_club_id": 1,
    "elder_join_club_name": "เข้าร่วมสม่ำเสมอ",
    "hos_guid": null
  },
  {
    "elder_join_club_id": 2,
    "elder_join_club_name": "เข้าร่วมไม่สม่ำเสมอ",
    "hos_guid": null
  },
  {
    "elder_join_club_id": 3,
    "elder_join_club_name": "ไม่เคยเข้าร่วม",
    "hos_guid": null
  }
]
```
