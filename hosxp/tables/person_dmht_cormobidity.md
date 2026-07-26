# `person_dmht_cormobidity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_dmht_cormobidity_id | int(11) | NO | PRI | 0 |  |  |
| person_dmht_cormobidity_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_dmht_cormobidity_name | person_dmht_cormobidity_name | yes | 1 |
| PRIMARY | person_dmht_cormobidity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "person_dmht_cormobidity_id": 1,
    "person_dmht_cormobidity_name": "ตา",
    "hos_guid": "{AB7F95A0-E5DB-11DF-BBCF-F3CA1C2D0000}",
    "hospcode": null
  }
]
```
