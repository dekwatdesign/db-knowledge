# `opdscreen_revisit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| old_cause_revisit | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| revisit_cause_text | varchar(200) | YES |  | NULL |  |  |
| revisit_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "520219065436",
    "old_cause_revisit": "Y",
    "hos_guid": "{3253D669-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "revisit_cause_text": null,
    "revisit_type_id": null
  },
  {
    "vn": "520221193445",
    "old_cause_revisit": "Y",
    "hos_guid": "{3253DA38-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "revisit_cause_text": null,
    "revisit_type_id": null
  },
  {
    "vn": "521130195807",
    "old_cause_revisit": "Y",
    "hos_guid": "{3253DCC9-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "revisit_cause_text": null,
    "revisit_type_id": null
  },
  {
    "vn": "521207171610",
    "old_cause_revisit": "Y",
    "hos_guid": "{3253DF45-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "revisit_cause_text": null,
    "revisit_type_id": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "old_cause_revisit": "Y",
    "hos_guid": null,
    "revisit_cause_text": null,
    "revisit_type_id": null
  },
  {
    "vn": "541014082916",
    "old_cause_revisit": "Y",
    "hos_guid": null,
    "revisit_cause_text": null,
    "revisit_type_id": null
  },
  {
    "vn": "541017161649",
    "old_cause_revisit": "Y",
    "hos_guid": null,
    "revisit_cause_text": null,
    "revisit_type_id": null
  },
  {
    "vn": "541103100105",
    "old_cause_revisit": "Y",
    "hos_guid": null,
    "revisit_cause_text": null,
    "revisit_type_id": null
  }
]
```
