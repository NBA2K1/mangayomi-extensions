import '../../../model/source.dart';
import 'src/mangabat/mangabat.dart';
import 'src/mangairo/mangaeiro.dart';
import 'src/mangakakalot/mangakakalot.dart';
import 'src/manganato/manganato.dart';

const mangaboxVersion = "0.0.1";
const mangaboxSourceCodeUrl =
    "https://raw.githubusercontent.com/kodjodevf/mangayomi-extensions/main/manga/multisrc/mangabox/mangabox-v$mangaboxVersion.dart";

List<Source> get mangaboxSourcesList => _mangaboxSourcesList;
List<Source> _mangaboxSourcesList = [
  //Mangabat (EN)
  mangabatSource,
  //Mangairo (EN)
  mangairoSource,
  //Mangakakalot (EN)
  mangakakalotSource,
  //Manganato (EN)
  manganatoSource
]
    .map((e) => e
      ..sourceCodeUrl = mangaboxSourceCodeUrl
      ..version = mangaboxVersion)
    .toList();