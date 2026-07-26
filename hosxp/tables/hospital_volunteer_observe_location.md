# `hospital_volunteer_observe_location`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_volunteer_observe_location_id | int(11) | NO | PRI | 0 |  |  |
| hospital_volunteer_observe_location_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospital_volunteer_observe_location_name | hospital_volunteer_observe_location_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_volunteer_observe_location_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "hospital_volunteer_observe_location_id": 1,
    "hospital_volunteer_observe_location_name": "ในประเทศ",
    "hos_guid": null
  },
  {
    "hospital_volunteer_observe_location_id": 2,
    "hospital_volunteer_observe_location_name": "ต่างประเทศ",
    "hos_guid": null
  }
]
```
