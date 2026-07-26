# `dchtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dchtype | char(2) | NO | PRI |  |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| nhso_dchtype | char(2) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dchtype | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "dchtype": "01",
    "name": "With Approval",
    "nhso_dchtype": "1",
    "hos_guid": null
  },
  {
    "dchtype": "02",
    "name": "Against Advice",
    "nhso_dchtype": "2",
    "hos_guid": null
  },
  {
    "dchtype": "03",
    "name": "By Escape",
    "nhso_dchtype": "3",
    "hos_guid": null
  },
  {
    "dchtype": "04",
    "name": "By Transfer",
    "nhso_dchtype": "4",
    "hos_guid": null
  },
  {
    "dchtype": "05",
    "name": "Other (specify)",
    "nhso_dchtype": "5",
    "hos_guid": null
  },
  {
    "dchtype": "08",
    "name": "Dead Autopsy",
    "nhso_dchtype": "8",
    "hos_guid": null
  },
  {
    "dchtype": "09",
    "name": "Dead Non Autopsy",
    "nhso_dchtype": "9",
    "hos_guid": null
  }
]
```
