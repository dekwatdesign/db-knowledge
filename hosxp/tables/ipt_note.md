# `ipt_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| note_text | text | YES |  | NULL |  |  |
| last_update | date | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| vs_fluid_chart_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "an": "680001149",
    "note_text": null,
    "last_update": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "vs_fluid_chart_type_id": 2
  },
  {
    "an": "680001193",
    "note_text": null,
    "last_update": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "vs_fluid_chart_type_id": 2
  },
  {
    "an": "680001297",
    "note_text": null,
    "last_update": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "vs_fluid_chart_type_id": 2
  },
  {
    "an": "680001343",
    "note_text": null,
    "last_update": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "vs_fluid_chart_type_id": 2
  },
  {
    "an": "680001376",
    "note_text": null,
    "last_update": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "vs_fluid_chart_type_id": 1
  },
  {
    "an": "680001413",
    "note_text": null,
    "last_update": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "vs_fluid_chart_type_id": 2
  },
  {
    "an": "680001977",
    "note_text": null,
    "last_update": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "vs_fluid_chart_type_id": 2
  }
]
```
