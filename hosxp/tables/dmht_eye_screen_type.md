# `dmht_eye_screen_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dmht_eye_screen_type_id | int(11) | NO | PRI | 0 |  |  |
| dmht_eye_screen_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dmht_eye_screen_type_name | dmht_eye_screen_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dmht_eye_screen_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "dmht_eye_screen_type_id": 1,
    "dmht_eye_screen_type_name": "Opthalmoscope",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_type_id": 2,
    "dmht_eye_screen_type_name": "Fundus Camera",
    "hos_guid": null
  }
]
```
