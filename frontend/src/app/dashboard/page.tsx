'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Users, 
  Calculator, 
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  BarChart3,
  Settings,
  Circle
} from 'lucide-react'

interface ProjectData {
  id: string
  name: string
  progress: number
  status: 'active' | 'completed' | 'pending' | 'critical'
  deadline: string
  team: number
}

interface StatCard {
  title: string
  value: string | number
  change: string
  trend: 'up' | 'down' | 'stable'
  icon: any
  color: string
}

export default function DashboardPage() {
  const [activeProjects] = useState<ProjectData[]>([
    {
      id: '1',
      name: 'Industriehalle Nord - Elektroinstallation',
      progress: 78,
      status: 'active',
      deadline: '2025-03-15',
      team: 5
    },
    {
      id: '2',
      name: 'Smart Factory München - Automation',
      progress: 45,
      status: 'critical',
      deadline: '2025-02-28',
      team: 8
    },
    {
      id: '3',
      name: 'Bürokomplex Hamburg - Gebäudetechnik',
      progress: 92,
      status: 'active',
      deadline: '2025-04-10',
      team: 3
    }
  ])

  const [stats] = useState<StatCard[]>([
    {
      title: 'Aktive Projekte',
      value: 12,
      change: '+2 diese Woche',
      trend: 'up',
      icon: Target,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Berechnungen',
      value: '2.4k',
      change: '+340 heute',
      trend: 'up',
      icon: Calculator,
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Team-Auslastung',
      value: '87%',
      change: '+5% optimal',
      trend: 'up',
      icon: Users,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'KI-Genauigkeit',
      value: '99.2%',
      change: '+0.8% Verbesserung',
      trend: 'up',
      icon: Brain,
      color: 'from-pink-400 to-pink-600'
    }
  ])

  const [aiRecommendations] = useState([
    {
      id: '1',
      type: 'optimization',
      title: 'Ressourcen-Optimierung erkannt',
      description: 'Team Alpha könnte Projekt München um 2 Tage früher abschließen',
      confidence: 94,
      priority: 'high'
    },
    {
      id: '2',
      type: 'warning',
      title: 'Potentieller Engpass identifiziert',
      description: 'Kabelquerschnitt in Sektor C könnte überlastet werden',
      confidence: 87,
      priority: 'medium'
    },
    {
      id: '3',
      type: 'suggestion',
      title: 'VDE-Norm Update verfügbar',
      description: 'Neue VDE 0100-520 Revision beeinflusst 3 aktive Projekte',
      confidence: 92,
      priority: 'low'
    }
  ])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'from-green-400 to-green-600'
      case 'critical': return 'from-red-400 to-red-600'
      case 'completed': return 'from-blue-400 to-blue-600'
      case 'pending': return 'from-yellow-400 to-yellow-600'
      default: return 'from-gray-400 to-gray-600'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4" />
      case 'critical': return <AlertTriangle className="w-4 h-4" />
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'pending': return <Clock className="w-4 h-4" />
      default: return <Circle className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-neural-gradient">
      {/* Header */}
      <motion.header
        className="glass-card m-6 p-6 rounded-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Brain className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-white">Neural Dashboard</h1>
              <p className="text-white/70">Willkommen zurück, Alexander</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.button
              className="glass-button px-4 py-2 rounded-xl text-white flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-4 h-4" />
              <span>KI-Analyse starten</span>
            </motion.button>
            
            <motion.button
              className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-white/70 hover:text-white"
              whileHover={{ scale: 1.1 }}
            >
              <Settings className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Stats Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-6 mb-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            variants={itemVariants}
            className="glass-card p-6 rounded-2xl relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <motion.div
                className="text-xs text-white/60 flex items-center"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.change}
              </motion.div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              <p className="text-white/70 text-sm">{stat.title}</p>
            </div>

            {/* Animated background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-6">
        {/* Active Projects */}
        <motion.div
          className="lg:col-span-2 glass-card p-6 rounded-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Aktive Projekte
            </h2>
            <motion.button
              className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
              whileHover={{ x: 5 }}
            >
              Alle anzeigen
              <TrendingUp className="w-4 h-4 ml-1" />
            </motion.button>
          </div>

          <div className="space-y-4">
            {activeProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-card p-4 rounded-xl hover:bg-white/5 transition-all group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getStatusColor(project.status)}`} />
                    <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(project.status)}
                    <span className="text-xs text-white/60">{project.team} Team</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Fortschritt</span>
                    <span className="text-white font-medium">{project.progress}%</span>
                  </div>
                  
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${getStatusColor(project.status)} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                  
                  <div className="flex justify-between text-xs text-white/60">
                    <span>Deadline: {new Date(project.deadline).toLocaleDateString('de-DE')}</span>
                    <span className="text-blue-400">Details →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Recommendations */}
        <motion.div
          className="glass-card p-6 rounded-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Brain className="w-5 h-5 mr-2 text-blue-400" />
              KI-Empfehlungen
            </h2>
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          <div className="space-y-4">
            {aiRecommendations.map((rec, index) => (
              <motion.div
                key={rec.id}
                className="glass-card p-4 rounded-xl border-l-4 border-blue-400/50 hover:border-blue-400 transition-all group cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      rec.priority === 'high' ? 'bg-red-400' :
                      rec.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                    }`} />
                    <span className="text-xs text-white/60 uppercase tracking-wide">
                      {rec.type}
                    </span>
                  </div>
                  <div className="text-xs text-blue-400 font-medium">
                    {rec.confidence}% Konfidenz
                  </div>
                </div>
                
                <h4 className="font-semibold text-white text-sm mb-2 group-hover:text-blue-300 transition-colors">
                  {rec.title}
                </h4>
                
                <p className="text-white/70 text-xs leading-relaxed">
                  {rec.description}
                </p>

                <motion.div
                  className="mt-3 flex justify-end"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <button className="text-blue-400 hover:text-blue-300 text-xs flex items-center transition-colors">
                    Anwenden
                    <Zap className="w-3 h-3 ml-1" />
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div
            className="mt-6 pt-6 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <h3 className="text-sm font-semibold text-white mb-4">Schnellzugriff</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Calculator, label: 'Berechnungen', color: 'from-purple-400 to-purple-600' },
                { icon: FileText, label: 'Berichte', color: 'from-green-400 to-green-600' },
                { icon: Users, label: 'Team', color: 'from-blue-400 to-blue-600' },
                { icon: BarChart3, label: 'Analytics', color: 'from-pink-400 to-pink-600' }
              ].map((action, index) => (
                <motion.button
                  key={action.label}
                  className={`glass-button p-3 rounded-xl flex flex-col items-center space-y-2 group bg-gradient-to-br ${action.color}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <action.icon className="w-5 h-5 text-white" />
                  <span className="text-xs text-white font-medium">{action.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Activity Feed */}
      <motion.div
        className="m-6 mt-8 glass-card p-6 rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Letzte Aktivitäten
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-white/60">Live-Updates</span>
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              time: 'vor 5 Min',
              action: 'Kabelberechnung abgeschlossen',
              details: 'Projekt München - 3x16mm² NYM-J empfohlen',
              icon: Calculator,
              color: 'text-green-400'
            },
            {
              time: 'vor 12 Min',
              action: 'Team-Meeting geplant',
              details: 'Morgen 9:00 - Projektstatus Hamburg',
              icon: Users,
              color: 'text-blue-400'
            },
            {
              time: 'vor 18 Min',
              action: 'VDE-Norm geprüft',
              details: 'Alle Berechnungen normenkonform ✓',
              icon: CheckCircle,
              color: 'text-purple-400'
            }
          ].map((activity, index) => (
            <motion.div
              key={index}
              className="glass-card p-4 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center ${activity.color}`}>
                  <activity.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white text-sm">{activity.action}</span>
                    <span className="text-xs text-white/60">{activity.time}</span>
                  </div>
                  <p className="text-white/70 text-xs">{activity.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}