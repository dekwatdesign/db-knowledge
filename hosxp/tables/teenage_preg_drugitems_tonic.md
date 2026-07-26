# `teenage_preg_drugitems_tonic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_drugitems_tonic_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_drugitems_tonic_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | teenage_preg_drugitems_tonic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "teenage_preg_drugitems_tonic_id": 1,
    "teenage_preg_drugitems_tonic_name": "Obimin AF",
    "hos_guid": null
  },
  {
    "teenage_preg_drugitems_tonic_id": 2,
    "teenage_preg_drugitems_tonic_name": "Obimin AZ",
    "hos_guid": null
  },
  {
    "teenage_preg_drugitems_tonic_id": 3,
    "teenage_preg_drugitems_tonic_name": "FBC",
    "hos_guid": null
  },
  {
    "teenage_preg_drugitems_tonic_id": 4,
    "teenage_preg_drugitems_tonic_name": "Folic acid",
    "hos_guid": null
  },
  {
    "teenage_preg_drugitems_tonic_id": 5,
    "teenage_preg_drugitems_tonic_name": "B6",
    "hos_guid": null
  },
  {
    "teenage_preg_drugitems_tonic_id": 6,
    "teenage_preg_drugitems_tonic_name": "Triferdine",
    "hos_guid": null
  },
  {
    "teenage_preg_drugitems_tonic_id": 7,
    "teenage_preg_drugitems_tonic_name": "Calcium",
    "hos_guid": null
  }
]
```
