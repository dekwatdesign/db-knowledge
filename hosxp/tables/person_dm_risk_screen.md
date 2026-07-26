# `person_dm_risk_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_dm_risk_screen_id | int(11) | NO | PRI | 0 |  |  |
| person_dm_risk_screen_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_dm_risk_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "person_dm_risk_screen_id": 1,
    "person_dm_risk_screen_name": "มีประวัติพ่อ แม่ ญาติพี่น้องสายตรงเป็นเบาหวาน",
    "hos_guid": "{AAE0CDE7-E5DB-11DF-BBCF-F3CA1C2D0000}",
    "hospcode": null
  }
]
```
