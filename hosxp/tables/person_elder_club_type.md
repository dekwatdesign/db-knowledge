# `person_elder_club_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_elder_club_type_id | int(11) | NO | PRI | 0 |  |  |
| person_elder_club_type_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_elder_club_type_name | person_elder_club_type_name | yes | 1 |
| PRIMARY | person_elder_club_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "person_elder_club_type_id": 1,
    "person_elder_club_type_name": "อำเภอ",
    "hos_guid": "{ACEBAE0D-E5DB-11DF-BBCF-F3CA1C2D0000}",
    "hospcode": null
  }
]
```
